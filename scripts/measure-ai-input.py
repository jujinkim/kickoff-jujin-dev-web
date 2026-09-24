"""Measure built initial AI document input. Requires tiktoken==0.12.0."""

import json
from pathlib import Path

import tiktoken


root = Path(__file__).resolve().parent.parent
encoding = tiktoken.get_encoding("o200k_base")
paths = ("ai/startup/latest.md", "ai/instructions.md")
counts = {
    path: len(encoding.encode((root / "dist" / path).read_text(encoding="utf-8")))
    for path in paths
}
total = sum(counts.values())
# Approximate previous mandatory input supplied in the approved plan;
# not a measurement of total task usage, billing, or model compliance.
baseline = 60_490
reduction = (1 - total / baseline) * 100
print(json.dumps({
    "encoding": encoding.name,
    "documents": counts,
    "total": total,
    "limit": 3_000,
    "previous_input_approx": baseline,
    "document_input_reduction_percent": round(reduction, 2),
}, indent=2))
if total > 3_000 or reduction < 95:
    raise SystemExit("Initial document input exceeds the approved budget")
