use gstd::{prelude::*, ActorId};
use primitive_types::U256;

pub type TokenId = U256;

#[derive(Debug, Default, Decode, Encode, TypeInfo, PartialEq, Eq)]
pub struct Token {
    pub id: TokenId,
    pub owner_id: ActorId,
    pub name: String,
    pub description: String,
    pub media: String,
    pub reference: String,
    pub approved_account_ids: BTreeSet<ActorId>,
}

#[derive(Debug, Default, Encode, Decode, Clone, TypeInfo, PartialEq, Eq, PartialOrd, Ord)]
pub struct TokenMetadata {
    // The domain of our service
    pub domain: String,
    // The IP address
    pub IP: String,
}
