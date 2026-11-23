#!/usr/bin/env node
/**
 * Solana Sniper Rug-Pull Guard (Zero Dependencies)
 * Usage:
 *   DIOGENES_SESSION_KEY=dg_sec_... node index.mjs <SPL_MINT_ADDRESS>
 *   node index.mjs EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v --demo
 */
const mint = process.argv[2] || "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const isDemo = process.argv.includes("--demo") || !process.env.DIOGENES_SESSION_KEY;
const baseUrl = (process.env.DIOGENES_URL || "https://diogenesgateway.com").replace(/\/$/, "");
const url = `${baseUrl}/api/v1/crypto/solana-risk${isDemo ? "?demo=true" : ""}`;

const headers = { "Content-Type": "application/json" };
if (process.env.DIOGENES_SESSION_KEY) {
  headers["Authorization"] = `Bearer ${process.env.DIOGENES_SESSION_KEY}`;
}

const res = await fetch(url, {
  method: "POST",
  headers,
  body: JSON.stringify({ mint_address: mint, risk_profile: "allow_regulated_stablecoins" }),
});
const data = await res.json();
if (!res.ok) {
  console.error(`HTTP ${res.status}:`, JSON.stringify(data, null, 2));
  process.exit(1);
}
const p = data.preview || data;
console.log(`Mint: ${mint}`);
console.log(`Verdict: ${p.should_transact === false ? "BLOCK (HIGH RISK)" : "PASS"}`);
console.log(`Risk Score: ${p.risk_score ?? "N/A"} | Freeze Authority: ${p.has_freeze_authority ? "ACTIVE" : "Disabled"}`);
if (p.should_transact === false) process.exit(2);
