export type HistoryStatusType = "SUCCESS" | "FAILED" | "ON_PROGRESS";

export interface IHistoryTableItem extends IHistoryTransactionResponse{
  type: string;
}

export interface IHistoryTransactionResponse {
  blockNumber:       string;
  timeStamp:         string;
  hash:              string;
  nonce:             string;
  blockHash:         string;
  from:              string;
  contractAddress:   string;
  to:                string;
  value:             string;
  tokenName:         string;
  tokenSymbol:       string;
  tokenDecimal:      string;
  transactionIndex:  string;
  gas:               string;
  gasPrice:          string;
  gasUsed:           string;
  cumulativeGasUsed: string;
  input:             string;
  confirmations:     string;
  status: HistoryStatusType;
}