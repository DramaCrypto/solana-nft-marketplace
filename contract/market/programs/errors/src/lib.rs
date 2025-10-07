use anchor_lang::{prelude::*, system_program};
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{self, CloseAccount, Mint, Token, TokenAccount, Transfer},
};
// mod errors;
// mod program_accounts;

// use errors::*;
// use program_accounts::*;

declare_id!("CF2FBoCnN6bHgSUT1stncf9TwpgG5nAgntBRJp4eXChD");

#[program]
pub mod anchor_marketplace {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, fee: u16) -> Result<()> {
        let accounts: &mut Initialize<'_> = ctx.accounts;
        accounts.marketplace.admin = accounts.admin.key();
        accounts.marketplace.fee = fee;
        msg!("Program initialized!");
        Ok(())
    }

    pub fn list(ctx: Context<List>, price: u64) -> Result<()> {
        let accounts: &mut List<'_> = ctx.accounts;
        if price <= 0 {
            return err!(ErrorCode::InvalidPrice);
        }
        accounts.listing.price = price;

        let cpi_accounts = Transfer {
            from: accounts.maker_ata.to_account_info(),
            to: accounts.vault.to_account_info(),
            authority: accounts.maker.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(accounts.token_program.to_account_info(), cpi_accounts);
        token::transfer(cpi_ctx, 1)?;

        msg!(
            "log_list_token:{},{},{}",
            &accounts.maker_mint.key(),
            &accounts.maker.key(),
            price
        );

        Ok(())
    }

    pub fn delist(ctx: Context<Delist>) -> Result<()> {
        let seeds = &[
            &ctx.accounts.marketplace.key().to_bytes()[..],
            &ctx.accounts.maker_mint.key().to_bytes()[..],
            &[ctx.bumps.listing],
        ];
        let signer_seeds = &[&seeds[..]];

        let accounts: &mut Delist<'_> = ctx.accounts;
        accounts.listing.price = 0;

        let cpi_accounts = Transfer {
            from: accounts.vault.to_account_info(),
            to: accounts.maker_ata.to_account_info(),
            authority: accounts.listing.to_account_info(),
        };
        let cpi_ctx = CpiContext::new_with_signer(
            accounts.token_program.to_account_info(),
            cpi_accounts,
            signer_seeds,
        );
        token::transfer(cpi_ctx, 1)?;

        // let cpi_accounts = CloseAccount {
        //     account: ctx.accounts.vault.to_account_info(),
        //     destination: ctx.accounts.maker.to_account_info(),
        //     authority: ctx.accounts.listing.to_account_info(),
        // };

        // let cpi_ctx = CpiContext::new_with_signer(
        //     ctx.accounts.token_program.to_account_info(),
        //     cpi_accounts,
        //     signer_seeds,
        // );

        // token::close_account(cpi_ctx)?;

        msg!(
            "log_delist_token:{},{}",
            &accounts.maker_mint.key(),
            &accounts.maker.key()
        );

        Ok(())
    }

    pub fn purchase(ctx: Context<Purchase>) -> Result<()> {
        let seeds = &[
            &ctx.accounts.marketplace.key().to_bytes()[..],
            &ctx.accounts.maker_mint.key().to_bytes()[..],
            &[ctx.bumps.listing],
        ];
        let signer_seeds = &[&seeds[..]];

        let accounts: &mut Purchase<'_> = ctx.accounts;

        let cpi_accounts = system_program::Transfer {
            from: accounts.taker.to_account_info(),
            to: accounts.maker.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(accounts.system_program.to_account_info(), cpi_accounts);

        let amount = accounts
            .listing
            .price
            .checked_mul(accounts.marketplace.fee as u64)
            .unwrap()
            .checked_div(10000)
            .unwrap();

        system_program::transfer(cpi_ctx, accounts.listing.price - amount)?;

        let cpi_accounts = system_program::Transfer {
            from: accounts.taker.to_account_info(),
            to: accounts.treasury.to_account_info(),
        };

        let cpi_ctx = CpiContext::new(accounts.system_program.to_account_info(), cpi_accounts);

        system_program::transfer(cpi_ctx, amount)?;

        let cpi_accounts = Transfer {
            from: accounts.vault.to_account_info(),
            to: accounts.taker_ata.to_account_info(),
            authority: accounts.listing.to_account_info(),
        };

        let cpi_ctx = CpiContext::new_with_signer(
            accounts.token_program.to_account_info(),
            cpi_accounts,
            signer_seeds,
        );

        token::transfer(cpi_ctx, 1)?;

        let cpi_accounts = CloseAccount {
            account: accounts.vault.to_account_info(),
            destination: accounts.maker.to_account_info(),
            authority: accounts.listing.to_account_info(),
        };

        let cpi_ctx = CpiContext::new_with_signer(
            accounts.token_program.to_account_info(),
            cpi_accounts,
            signer_seeds,
        );

        token::close_account(cpi_ctx)?;

        msg!(
            "log_purchase_token:{},{},{},{}",
            &accounts.maker_mint.key(),
            &accounts.maker.key(),
            &accounts.taker.key(),
            &accounts.listing.price
        );

        accounts.listing.price = 0;

        Ok(())
    }

    pub fn make_offer(ctx: Context<MakeOffer>, price: u64) -> Result<()> {
        let accounts: &mut MakeOffer<'_> = ctx.accounts;

        // Validate that the price is greater than 0
        if price <= 0 {
            return err!(ErrorCode::InvalidPrice);
        }
        let new_offer: PendingOffer = PendingOffer {
            offerer: accounts.offerer.key(),
            amount: price,
        };

        let mut index_to_remove: isize = -1;
        for i in 0..accounts.listing.offers.len() {
            let entry: &PendingOffer = &accounts.listing.offers[i];
            if entry.offerer == accounts.offerer.key() {
                index_to_remove = i as isize;
            }
        }
        if index_to_remove != -1 {
            // msg!("index to remove: {}", index_to_remove);
            return err!(ErrorCode::OfferAlreadyExist);
        }

        let cpi_accounts = system_program::Transfer {
            from: accounts.offerer.to_account_info(),
            to: accounts.treasury.to_account_info(),
        };

        let cpi_ctx = CpiContext::new(accounts.system_program.to_account_info(), cpi_accounts);

        system_program::transfer(cpi_ctx, price)?;

        accounts.listing.offers.push(new_offer);

        msg!(
            "log_offer_token:{},{},{}",
            &accounts.maker_mint.key(),
            &accounts.offerer.key(),
            price
        );

        Ok(())
    }

    pub fn cancel_offer(ctx: Context<CancelOffer>) -> Result<()> {
        let seeds = &["treasury".as_bytes(), &[ctx.bumps.treasury]];
        let signer_seeds = &[&seeds[..]];

        let accounts: &mut CancelOffer<'_> = ctx.accounts;

        //finding the requested pending offer
        let mut amount: u64 = 0;
        let mut index_to_remove: isize = -1;
        for i in 0..accounts.listing.offers.len() {
            let entry: &PendingOffer = &accounts.listing.offers[i];
            if entry.offerer == accounts.offerer.key() {
                index_to_remove = i as isize;
                amount = entry.amount;
            }
        }
        if index_to_remove == -1 {
            // msg!("index to remove: {}", index_to_remove);
            return err!(ErrorCode::NoPendingOfferFound);
        }

        system_program::transfer(
            CpiContext::new_with_signer(
                accounts.system_program.to_account_info(),
                system_program::Transfer {
                    from: accounts.treasury.to_account_info(),
                    to: accounts.offerer.to_account_info(),
                },
                signer_seeds,
            ),
            amount,
        )?;

        accounts
            .listing
            .offers
            .swap_remove(index_to_remove as usize);

        msg!(
            "log_unoffer_token:{},{}",
            &accounts.maker_mint.key(),
            &accounts.offerer.key()
        );

        Ok(())
    }

    pub fn accept_offer(ctx: Context<AcceptOffer>) -> Result<()> {
        let seeds = &[
            &ctx.accounts.marketplace.key().to_bytes()[..],
            &ctx.accounts.maker_mint.key().to_bytes()[..],
            &[ctx.bumps.listing],
        ];
        let signer_seeds = &[&seeds[..]];

        let treasure_seeds = &["treasury".as_bytes(), &[ctx.bumps.treasury]];
        let treasure_signer_seeds = &[&treasure_seeds[..]];

        let accounts: &mut AcceptOffer<'_> = ctx.accounts;
        //finding the requested pending offer
        let mut amount: u64 = 0;
        let mut log_amount: u64 = 0;
        let mut index_to_remove: isize = -1;
        for i in 0..accounts.listing.offers.len() {
            let entry: &PendingOffer = &accounts.listing.offers[i];
            if entry.offerer == accounts.offerer.key() {
                index_to_remove = i as isize;
                amount = entry.amount;
                log_amount = entry.amount;
            }
        }
        if index_to_remove == -1 {
            return err!(ErrorCode::NoPendingOfferFound);
        }

        amount -= amount
            .checked_mul(accounts.marketplace.fee as u64)
            .unwrap()
            .checked_div(10000)
            .unwrap();
        system_program::transfer(
            CpiContext::new_with_signer(
                accounts.system_program.to_account_info(),
                system_program::Transfer {
                    from: accounts.treasury.to_account_info(),
                    to: accounts.maker.to_account_info(),
                },
                treasure_signer_seeds,
            ),
            amount,
        )?;

        let cpi_accounts = Transfer {
            from: accounts.vault.to_account_info(),
            to: accounts.offerer_ata.to_account_info(),
            authority: accounts.listing.to_account_info(),
        };

        let cpi_ctx = CpiContext::new_with_signer(
            accounts.token_program.to_account_info(),
            cpi_accounts,
            signer_seeds,
        );

        token::transfer(cpi_ctx, 1)?;

        accounts
            .listing
            .offers
            .swap_remove(index_to_remove as usize);

        msg!(
            "log_acceptoffer_token:{},{},{},{}",
            &accounts.maker_mint.key(),
            &accounts.maker.key(),
            &accounts.offerer.key(),
            log_amount
        );
        accounts.listing.price = 0;
        Ok(())
    }

    pub fn decline_offer(ctx: Context<DeclineOffer>) -> Result<()> {
        let treasure_seeds = &["treasury".as_bytes(), &[ctx.bumps.treasury]];
        let treasure_signer_seeds = &[&treasure_seeds[..]];

        let accounts: &mut DeclineOffer<'_> = ctx.accounts;
        //finding the requested pending offer
        let mut amount: u64 = 0;
        let mut index_to_remove: isize = -1;
        for i in 0..accounts.listing.offers.len() {
            let entry: &PendingOffer = &accounts.listing.offers[i];
            if entry.offerer == accounts.offerer.key() {
                index_to_remove = i as isize;
                amount = entry.amount;
            }
        }
        if index_to_remove == -1 {
            return err!(ErrorCode::NoPendingOfferFound);
        }

        system_program::transfer(
            CpiContext::new_with_signer(
                accounts.system_program.to_account_info(),
                system_program::Transfer {
                    from: accounts.treasury.to_account_info(),
                    to: accounts.offerer.to_account_info(),
                },
                treasure_signer_seeds,
            ),
            amount,
        )?;

        accounts
            .listing
            .offers
            .swap_remove(index_to_remove as usize);

        Ok(())
    }

    pub fn withdraw_from_treasury(ctx: Context<WithdrawFromTreasury>, amount: u64) -> Result<()> {
        let accounts: &WithdrawFromTreasury<'_> = ctx.accounts;

        if accounts.signer.key() != accounts.marketplace.admin {
            return err!(ErrorCode::Unauthorized);
        }

        let seeds = &["treasury".as_bytes(), &[ctx.bumps.treasury]];
        let signer = &[&seeds[..]];
        system_program::transfer(
            CpiContext::new_with_signer(
                accounts.system_program.to_account_info(),
                system_program::Transfer {
                    from: accounts.treasury.to_account_info(),
                    to: accounts.receiver.to_account_info(),
                },
                signer,
            ),
            amount,
        )?;

        msg!("Withdrew {} lamports from treasury", amount);

        Ok(())
    }
}

//initialization Accounts
#[derive(Accounts)]
#[instruction(fee: u16)]
pub struct Initialize<'info> {
    #[account(mut)]
    admin: Signer<'info>,
    #[account(
        init,
        space = Marketplace::INIT_SIZE,
        payer = admin,
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    #[account(
        seeds = [b"treasury"],
        bump
    )]
    treasury: SystemAccount<'info>,
    pub system_program: Program<'info, System>,
    pub rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct List<'info> {
    #[account(mut)]
    maker: Signer<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump,
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        mut,
        associated_token::mint = maker_mint,
        associated_token::authority = maker,
    )]
    maker_ata: Account<'info, TokenAccount>,
    #[account(
        init_if_needed,
        payer = maker,
        associated_token::mint = maker_mint,
        associated_token::authority = listing,
    )]
    vault: Account<'info, TokenAccount>,
    #[account(
        init_if_needed,
        payer = maker,
        space = Listing::INIT_SIZE,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump
    )]
    listing: Account<'info, Listing>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>,
    token_program: Program<'info, Token>,
}

#[derive(Accounts)]
pub struct Delist<'info> {
    #[account(mut)]
    maker: Signer<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        mut,
        associated_token::authority = maker,
        associated_token::mint = maker_mint,
    )]
    maker_ata: Account<'info, TokenAccount>,
    #[account(
        mut,
        close = maker,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        associated_token::mint = maker_mint,
        associated_token::authority = listing,
    )]
    vault: Account<'info, TokenAccount>,
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Purchase<'info> {
    #[account(mut)]
    taker: Signer<'info>,
    #[account(mut)]
    maker: SystemAccount<'info>,
    maker_mint: Account<'info, Mint>,
    #[account(
        seeds = [b"marketplace"],
        bump,
    )]
    marketplace: Account<'info, Marketplace>,
    #[account(
        init_if_needed,
        payer = taker,
        associated_token::mint = maker_mint,
        associated_token::authority = taker,
    )]
    taker_ata: Account<'info, TokenAccount>,
    #[account(
        mut,
        associated_token::mint = maker_mint,
        associated_token::authority = listing,
    )]
    vault: Account<'info, TokenAccount>,
    #[account(
        mut,
        close = maker,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump,
    )]
    treasury: SystemAccount<'info>,
    associated_token_program: Program<'info, AssociatedToken>,
    system_program: Program<'info, System>,
    token_program: Program<'info, Token>,
}

#[derive(Accounts)]
#[instruction(price: u64)]
pub struct MakeOffer<'info> {
    #[account(mut)]
    offerer: Signer<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        init_if_needed,
        payer = offerer,
        associated_token::mint = maker_mint,
        associated_token::authority = offerer,
    )]
    offerer_ata: Account<'info, TokenAccount>,
    #[account(
        mut,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump,
    )]
    treasury: SystemAccount<'info>,
    associated_token_program: Program<'info, AssociatedToken>,
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CancelOffer<'info> {
    #[account(mut)]
    offerer: Signer<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        mut,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump,
    )]
    treasury: SystemAccount<'info>,
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AcceptOffer<'info> {
    #[account(mut)]
    maker: Signer<'info>,
    offerer: SystemAccount<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        init_if_needed,
        payer = maker,
        associated_token::mint = maker_mint,
        associated_token::authority = offerer,
    )]
    offerer_ata: Account<'info, TokenAccount>,
    #[account(
        mut,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        associated_token::mint = maker_mint,
        associated_token::authority = listing,
    )]
    vault: Account<'info, TokenAccount>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump,
    )]
    treasury: SystemAccount<'info>,
    associated_token_program: Program<'info, AssociatedToken>,
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DeclineOffer<'info> {
    #[account(mut)]
    maker: Signer<'info>,
    #[account(mut)]
    offerer: SystemAccount<'info>,
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    maker_mint: Account<'info, Mint>,
    #[account(
        mut,
        seeds = [marketplace.key().as_ref(), maker_mint.key().as_ref()],
        bump,
    )]
    listing: Account<'info, Listing>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump,
    )]
    treasury: SystemAccount<'info>,
    token_program: Program<'info, Token>,
    system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawFromTreasury<'info> {
    #[account(
        seeds = [b"marketplace"],
        bump
    )]
    marketplace: Account<'info, Marketplace>,
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        mut,
        seeds = [b"treasury"],
        bump
    )]
    pub treasury: SystemAccount<'info>,
    #[account(mut)]
    pub receiver: SystemAccount<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Marketplace {
    pub admin: Pubkey,
    pub fee: u16,
}

impl Marketplace {
    pub const INIT_SIZE: usize = 8 + 32 + 2;
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct PendingOffer {
    pub offerer: Pubkey,
    pub amount: u64,
}

#[account]
pub struct Listing {
    pub price: u64,
    pub offers: Vec<PendingOffer>,
}

impl Listing {
    pub const INIT_SIZE: usize = 8 + 8 + 4 + (32 + 8) * 3;
}

#[error_code]
pub enum ErrorCode {
    #[msg("Unauthorized: Signer is not the admin of the marketplace")]
    Unauthorized,
    #[msg("Pending Offer not Found")]
    NoPendingOfferFound,
    #[msg("Your Offer is already Exist")]
    OfferAlreadyExist,
    #[msg("Price must be greater than 0")]
    InvalidPrice,
}
