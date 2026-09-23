---
kind: guide
articleId: "revenue"
lang: "en"
title: "Subscription, one-time payment, or ads?"
summary: "Match the bill to the value. The pricing page cannot rescue the product."
category: "business"
aliases:
  [
    "subscription",
    "one-time",
    "advertising",
    "구독",
    "일회 결제",
    "광고",
    "サブスクリプション",
    "買い切り",
    "広告",
  ]
related: ["payments", "srs"]
example: "revenue"
status: "published"
revision: 4
sourceRevision: 4
updated: "2026-09-23"
aiPrompt: "Compare subscription, one-time purchase, and advertising for our audience and ongoing costs. Separate gross revenue from costs with explicit assumptions. Ask about entitlement duration, cancellation, and privacy choices. Do not select a business model without delegation; return a decision record and acceptance criteria."
checked: "2026-09-23"
---

## Why: the goal or problem

Imagine running a small map-export tool. People make maps and share the results, while the team pays for processing and support each month.

A product may have enthusiastic users and still run out of money. A monthly price chosen by copying a competitor says little about what customers receive or what it costs to deliver. You need to connect continuing value, willingness to pay and operating costs before selecting a billing label.

## How: work toward a solution

1. Describe who receives value and who might pay. A reader, advertiser, sponsor and marketplace seller may be different people. Record the benefit each expects and how that expectation affects the experience. Avoid adding advertising merely because a payment button seems difficult.
2. Define the offer in observable terms: access, features, included usage, support and duration. For a fictional export tool, does a purchase include a fixed download, ongoing processing or a number of exports? A “lifetime” promise without a defined service scope hides obligations rather than explaining them.
3. Separate the decisions. The revenue source identifies the payer; billing determines when money is collected; pricing determines the amount; access rules determine what the customer can use. Recurring billing can have a fixed amount or measured usage. Different axes can coexist without becoming the same concept.
4. Write a small, explicitly fictional calculation. One hundred members paying 5 produce 500 gross. Subtract estimated processing, refunds, hosting and support costs before discussing a remaining margin; apply the relevant tax treatment separately. Repeat the model with fewer paying customers and heavier usage. The point is exposing assumptions, not predicting guaranteed profit.
5. Test the offer before optimizing implementation. Ask prospective users about the proposed benefit and price, or run an authorized limited trial. Record what was observed and what remains hypothetical. Define cancellation, failed payment and access-expiry behavior before customers encounter them.

Compare the model's demands on your team. Continuing service needs continuing delivery; a one-time sale must fund whatever support it promises; advertising changes attention and potentially data handling. Users own these product and business choices unless they delegate them. AI can model alternatives and implement the agreed rules, but a spreadsheet or recommendation does not authorize spending or public sales.

## What: the concept

A revenue model explains how value supports the business; billing and pricing make parts of that model operational. [Stripe's subscription overview](https://docs.stripe.com/billing/subscriptions/overview) illustrates recurring billing and its lifecycle. Revenue is not profit, and recurring collection does not create customer value by itself. Sources checked 2026-09-23; validate current provider conditions for the actual product and market.
