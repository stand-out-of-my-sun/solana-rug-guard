# Solana Sniper Rug-Pull Guard

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Powered by Diogenes](https://img.shields.io/badge/Powered%20By-Diogenes%20Gateway-purple.svg)](https://diogenesgateway.com)
[![Prepaid Keys](https://img.shields.io/badge/Prepaid%20Keys-%3C0.1ms%20Fast%20Path-orange.svg)](https://diogenesgateway.com#prepay-checkout-widget)

A 35-line, zero-dependency pre-trade security gate that inspects any Solana SPL or Token-2022 mint address for active freeze/mint authorities and honeypot transfer taxes before your bot buys.

```bash
# 1. Try free (3 live demos/day)
node index.mjs EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v --demo

# 2. Production (<0.1ms fast-path resolution with prepaid session key)
# Top up via Card / Apple Pay / Crypto at https://diogenesgateway.com/#prepay-checkout-widget
DIOGENES_SESSION_KEY=dg_sec_... node index.mjs <MINT_ADDRESS>
```

### Features
- **Zero On-Chain Latency**: Resolves via Cloudflare Global Edge in `<0.1ms` using your session key (`dg_sec_...`).
- **Instant Stripe Card Checkout**: Top up \$5 Starter, \$20 Builder, or \$100 Fleet packs at [https://diogenesgateway.com/#prepay-checkout-widget](https://diogenesgateway.com#prepay-checkout-widget).
- **1-Click MCP Setup**: Install the full Web3 Security suite into Cursor/Claude via `curl -sSL "https://diogenesgateway.com/install.sh" | bash`.
