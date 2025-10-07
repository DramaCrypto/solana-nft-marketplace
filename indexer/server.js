require('dotenv').config({path: "./.env"});
const axios = require('axios');
const solanaWeb3 = require('@solana/web3.js');
const { logger } = require("./winston");

const searchAddress = process.env.PROGRAM_ID;
const backendpoint = process.env.BACKEND_URL;
const bear_token = process.env.BEAR_TOKEN;
const endpoint = process.env.RPC_URL;
const solanaConnection = new solanaWeb3.Connection(endpoint);
const fetch_time = 2000;
let start_slot = Number(process.env.START_SLOT || 313677197);

const getSlotSignatures = async(address, prev_slot) => {
	try {
		const pubKey = new solanaWeb3.PublicKey(address);
		let new_slot = await solanaConnection.getSlot({commitment: "finalized"});
		let signatureList = await solanaConnection.getConfirmedSignaturesForAddress(pubKey, prev_slot, new_slot);
		logger.info(`From: ${prev_slot}, To: ${new_slot}, Found Transaction: ${signatureList}`);
		start_slot = new_slot + 1;

		handleSignatures(signatureList);
	} catch(e) {
		logger.error(e)
	}

}

const handleSignatures = async(transactionList) => {
	try {
		let transactionDetails = await solanaConnection.getParsedTransactions(transactionList, {maxSupportedTransactionVersion:0});
		transactionList.forEach((transaction, i) => {
	        const date = new Date(transactionDetails[i].blockTime*1000);
	        logger.info(`current transaction: ${transaction}`);
	        handleTransaction(transactionDetails[i].meta.logMessages, transaction);
	        console.log(("-").repeat(20));
	    })
	} catch(e) {
		logger.error('While processing Signature', e);
	}
}

const handleTransaction = async(log_msgs, transaction) => {
	try {
		for(let log_msg of log_msgs) {
			if(log_msg.includes("log_list_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_seller = msg_value_lists[1];
        const token_price = msg_value_lists[2];
        logger.info(`Token List--Token: ${token_mint}--Seller: ${token_seller}--Price: ${token_price}`);
        handleTokenList(token_mint, token_seller, token_price);
			}

			if(log_msg.includes("log_delist_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_seller = msg_value_lists[1];
        logger.info(`Token Delist--Token: ${token_mint}--Seller: ${token_seller}`);
        handleTokenDelist(token_mint, token_seller);
			}

			if(log_msg.includes("log_purchase_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_seller = msg_value_lists[1];
        const token_buyer = msg_value_lists[2];
        const token_price = msg_value_lists[3];
        logger.info(`Token Purchase--Token: ${token_mint}--Seller: ${token_seller} --Buyer: ${token_buyer}--Price: ${token_price}`);
        handleTokenPurchase(token_mint, token_seller, token_buyer, token_price);
			}

			if(log_msg.includes("log_offer_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_offerer = msg_value_lists[1];
        const token_price = msg_value_lists[2];
        logger.info(`Token Offer--Token: ${token_mint}--Offerer: ${token_offerer}--Price: ${token_price}`);
        handleTokenOffer(token_mint, token_offerer, token_price);
			}

			if(log_msg.includes("log_unoffer_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_offerer = msg_value_lists[1];
        logger.info(`Token Unoffer--Token: ${token_mint}--Offerer: ${token_offerer}`);
        handleTokenUnoffer(token_mint, token_offerer);
			}

			if(log_msg.includes("log_acceptoffer_token")) {
				const instruction_log_split = log_msg.split(":");
				if(instruction_log_split.length < 3) {
            return;
        }
        const msg_value_lists = instruction_log_split[2].split(",");
        const token_mint = msg_value_lists[0];
        const token_seller = msg_value_lists[1];
        const token_offerer = msg_value_lists[2];
        const token_price = msg_value_lists[3];
        logger.info(`Token Acceptoffer--Token: ${token_mint}--Seller: ${token_seller}--Offerer: ${token_offerer}--Price: ${token_price}`);
        handleTokenAcceptOffer(token_mint, token_seller, token_offerer, token_price);
			}

		}
	} catch(e) {
		logger.error(e);
	}
}

const handleTokenList = async (token_mint, token_seller, token_price) => {
  try {
    const response = await axios.post(`${backendpoint}/items`, {
	    	token_address: token_mint,
	    	public_key: token_seller,
	    	price: token_price,
	    	status: "list"
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });

    logger.info('list', response.data);
	} catch (error) {
		logger.error('Error making List request:', error);
	}
};

const handleTokenDelist = async (token_mint, token_seller) => {
  try {
    const response = await axios.post(`${backendpoint}/items`, {
	    	token_address: token_mint,
	    	public_key: token_seller,
	    	status: "cancel"
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });
    logger.info('delist', response.data);
	} catch (error) {
		logger.error('Error making Delist request:', error);
	}
};

const handleTokenPurchase = async (token_mint, token_seller, token_buyer, token_price) => {
  try {
    const response = await axios.post(`${backendpoint}/items`, {
	    	token_address: token_mint,
	    	seller_public_key: token_seller,
	    	buyer_public_key: token_buyer,
	    	price: token_price,
	    	status: "sale"
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });
    logger.info('purchase', response.data);
	} catch (error) {
		logger.error('Error making Purchase request:', error);
	}
};

const handleTokenOffer = async (token_mint, token_offerer, token_price) => {
  try {
    const response = await axios.post(`${backendpoint}/offers`, {
	    	token_address: token_mint,
	    	offerer_public_key: token_offerer,
	    	price: token_price
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });

    logger.info('offer', response.data);
	} catch (error) {
		logger.error('Error making Offer request:', error);
	}
};

const handleTokenUnoffer = async (token_mint, token_offerer) => {
  try {
    const response = await axios.post(`${backendpoint}/offers/cancel`, {
	    	token_address: token_mint,
	    	offerer_public_key: token_offerer
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });

    logger.info('cancel-offer', response.data);
	} catch (error) {
		logger.error('Error making Unoffer request:', error);
	}
};

const handleTokenAcceptOffer = async (token_mint, token_seller, token_offerer, token_price) => {
  try {
    const response = await axios.post(`${backendpoint}/items`, {
	    	token_address: token_mint,
	    	seller_public_key: token_seller,
	    	offerer_public_key: token_offerer,
	    	price: token_price,
	    	status: "sale"
	    }, {
	    	headers: {
	        	'Content-Type': 'application/json',
	        	'Authorization': bear_token
	    }
    });

    logger.info('accept-offer', response.data);
	} catch (error) {
		logger.error('Error making Accept Offer request:', error);
	}
};

async function runWithDelay() {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const interval = fetch_time; // fetch time

    while (true) {
        const startTime = Date.now();

        // fs.writeFile('last_slot.txt', String(start_slot), (err) => {
				//   if (err) {
				//     console.error('Error writing to file', err);
				//   } else {
				//     logger.info('Data saved successfully');
				//   }
				// });
        
        await getSlotSignatures(searchAddress, start_slot);

        const elapsedTime = Date.now() - startTime;
        const remainingTime = interval - elapsedTime;
        
        if (remainingTime > 0) {
            await delay(remainingTime);
        }
    }
}

const main = async () => {
	logger.info(`Listening for transactions involving program ID: ${searchAddress}`);

	
	start_slot = await solanaConnection.getSlot({commitment: "finalized"});
	
	runWithDelay();
};
main()