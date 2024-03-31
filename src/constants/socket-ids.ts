const SOCKET_IDS = {
  REQUEST_SOCKET_FUNDS: 0,
  SEND_TX: 1,
  GET_LEADERBOARD: 2,
  GET_PROFILE: 3,
  SET_PROFILE: 4,
  REDEEM_REWARDS: 5,
  EMAIL_INVITE: 6,
  GET_CHAINS: 7,
  NOTIFICATION: 8,
  NOTIFICATION_MARK_AS_READ: 9,
  GET_TX_HISTORY: 10,
  TWITTER_USERNAME_TO_ID: 11,
  TWITTER_ID_TO_USERNAME: 12,
  VERIFY_INVITE: 13,
  OPT_IN_GASLESS: 13,
  VERIFY_TWEET: 14,
  VERIFY_REFERRER: 15,
  GET_GASLESS_INFO: 15,
  VERIFY_TWITTER_FOLLOW: 16,
  ADD_PENDING_TX: 17,
  LIST_PENDING_TXS: 18,
  REMOVE_PENDING_TX: 19,
  GET_XP_BREAKDOWN: 20,
  GET_GAS_STATION: 160,
  CHECK_EMAIL: 168,
  CREATE_REQUEST: 176,
  GET_REQUEST: 177,
  FULFILL_REQUEST: 178,
  REJECT_REQUEST: 179,
  LIST_REQUESTS: 180,
  GET_AIRDROP_INFO: 192,
  CLAIM_PHASE_1: 193,
  CLAIM_PHASE_2: 194,
  CLAIM_DIAMOND_HANDS_AIRDROP: 195,
  PING: 255,
  TWITTER_REQUEST_TOKEN: 202,
  TWITTER_HANDLE_REDIRECT: 203,
};

const LEADERBOARD_TYPES = {
  GLOBAL: "g".charCodeAt(0),
  WEEKLY: "w".charCodeAt(0),
};

const TOKEN_TYPES = {
  NATIVE: 0,
  ERC20: 1,
};

const GAS_SUPPORTED_CHAINS = [137, 80001];

export { SOCKET_IDS, LEADERBOARD_TYPES, TOKEN_TYPES, GAS_SUPPORTED_CHAINS };