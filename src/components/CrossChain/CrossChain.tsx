import { TextField, Autocomplete, Card } from "@mui/material";
import styles from "./CrossChain.module.scss";
import { SwapHorizontal } from "mdi-material-ui";
import chains from "./chains";

const CrossChain = () => {
  return (
    <Card className={styles.container}>
      <div className={styles.sourceRow}>
        <Autocomplete
          disablePortal
          options={chains}
          sx={{ width: 240 }}
          renderInput={(params) => <TextField {...params} label="From" placeholder="Select chain" />}
        />
        <div className={styles.swapIcon}>
          <SwapHorizontal />
        </div>
        <Autocomplete
          disablePortal
          options={chains}
          sx={{ width: 240 }}
          renderInput={(params) => <TextField {...params} label="To" placeholder="Select chain" />}
        />
      </div>
      <div className={styles.tokenRow}>
        <Autocomplete
          disablePortal
          options={chains}
          sx={{ width: "100%" }}
          renderInput={(params) => <TextField {...params} label="I want to transfer" placeholder="Select token" />}
        />
      </div>
      <div className={styles.destinationRow}>
        <TextField label="Destination Address" fullWidth />
      </div>
    </Card>
  );
};

export default CrossChain;
