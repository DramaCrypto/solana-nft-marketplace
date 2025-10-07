import { SyncLoader } from "react-spinners";

export default function ({ loading }) {
  return (
    <SyncLoader loading={loading} size={7} margin={3} speedMultiplier={0.75} />
  );
}
