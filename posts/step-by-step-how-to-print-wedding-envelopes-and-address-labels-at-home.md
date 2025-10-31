---
draft: false
title: "Step-by-Step: How to Print Wedding Envelopes and Address Labels at Home"
description: A complete guide to printing your own wedding envelopes and address
  labels using your TextMyLink guest list — including how to format names,
  create a mail merge, and design matching labels in Canva.
seo_title: DIY Wedding Envelope Printing (Mail Merge + Canva Guide)
seo_description: Learn how to print wedding envelopes and labels at home using
  your TextMyLink guest list, mail merge in Word, and Canva design templates.
date: 2025-10-31T11:23:00.000-07:00
tags:
  - blog
image: /uploads/img_0719.jpeg
seo_image: ""
author: Daniel Schulman
layout: post.njk
---
<p>There’s a certain moment in wedding planning when you realize: you’ve collected 100+ addresses... and now you actually have to print them.</p>



<p>I’ve been there, sitting at the dining table surrounded by envelopes, swearing the printer has it out for me. Every test print looked <em>almost</em> right, but not quite. So I finally sat down and figured out the right way to do it... no calligrapher, no overpriced printing service, just a clean export from <a href="https://www.textmylink.com" target="_blank" rel="noopener"><strong>TextMyLink</strong></a>, a spreadsheet, and a bit of mail merge magic.</p>



<p>Here’s the full, detailed walkthrough so you can print your envelopes (or labels) perfectly the first time.</p>



<h2>Part 1: Prepare Your Data and Word Document</h2>



<h3>1. Prepare Your Address List (Data Source)</h3>



<p>Start with your guest list, ideally the one you already collected with <strong>TextMyLink</strong>.</p>



<ul>

  <li>Open your event in the TextMyLink app.</li>

  <li>Tap <strong>Export → CSV</strong> to download your guest list.</li>

  <li>Open that CSV in Excel or Google Sheets.</li>

</ul>



<p>Here’s the good news: if you’re using <strong>TextMyLink</strong>, it’s already formatted perfectly. The app automatically organizes your guest information into clean, labeled columns, so you can plug the CSV straight into Word, Google Sheets, or Canva without fixing capitalization, spacing, or headers.</p>



<p><strong>Important tip:</strong> format your ZIP or postal code column as <strong>Text</strong>, not Number. Otherwise, Excel might drop leading zeros (especially for New England ZIPs like 02110).</p>



<p>This spreadsheet is your data source, so save it somewhere easy to find, like your desktop.</p>



<h4>Example TextMyLink Formulas for Formal Names</h4>



<p>If you want a formal top line on your envelopes or labels, you can add a new column called <strong>Formal Name</strong> in your spreadsheet. This lets you print “Mr. and Mrs. John Smith” instead of just “John Smith.”</p>



<p>These formulas match the exact TextMyLink export column order:</p>



<p><strong>Column Order (A → R):</strong></p>

<ul>

  <li>A: Title</li>

  <li>B: First Name</li>

  <li>C: Last Name</li>

  <li>D: Email</li>

  <li>E: Phone Number</li>

  <li>F: Partner Title</li>

  <li>G: Partner First Name</li>

  <li>H: Partner Last Name</li>

  <li>I: Partner Email</li>

  <li>J: Partner Phone Number</li>

  <li>K: Address</li>

  <li>L: Address 2</li>

  <li>M: City</li>

  <li>N: State</li>

  <li>O: Zip Code</li>

  <li>P: RSVP</li>

  <li>Q: Partner RSVP</li>

  <li>R: Comments</li>

</ul>



<p><strong>Simple (individual guest)</strong></p>

<pre><code>=B2 &amp; " " &amp; C2

</code></pre>

<p>John Smith</p>



<p><strong>With title (individual, skips if title is blank)</strong></p>

<pre><code>=IF(A2&lt;&gt;"",A2 &amp; " ","") &amp; B2 &amp; " " &amp; C2

</code></pre>

<p>Mr. John Smith</p>



<p><strong>Couples (auto skips if partner is blank)</strong></p>

<pre><code>=IF(F2&lt;&gt;"",A2 &amp; " " &amp; B2 &amp; " " &amp; C2 &amp; " &amp; " &amp; F2 &amp; " " &amp; G2 &amp; " " &amp; H2, A2 &amp; " " &amp; B2 &amp; " " &amp; C2)

</code></pre>

<p>Mr. John Smith &amp; Mrs. Jane Smith</p>



<p>Once you’ve added <strong>Formal Name</strong>, use it as the top line in your Word Mail Merge or Canva design for a polished, personal finish.</p>



<h3>2. Start the Mail Merge Process in Word</h3>



<ul>

  <li>Open a new blank document in <strong>Microsoft Word</strong>.</li>

  <li>Go to the <strong>Mailings</strong> tab on the top ribbon.</li>

  <li>Click <strong>Start Mail Merge → Envelopes</strong> (or use the <strong>Step-by-Step Mail Merge Wizard</strong> if you prefer guided setup).</li>

</ul>



<h3>3. Set Up Envelope Options</h3>



<p>The <strong>Envelope Options</strong> window will pop up.</p>



<p>Under the <strong>Envelope Options</strong> tab:</p>



<ul>

  <li>Choose your envelope size (A7 is common for wedding invites).</li>

  <li>Adjust your <strong>Delivery address</strong> and <strong>Return address</strong> font and position if you want a specific look.</li>

</ul>



<p>Then go to the <strong>Printing Options</strong> tab:</p>



<ul>

  <li>Check the <strong>Feed method</strong> illustration so you load envelopes correctly for your printer.</li>

  <li>Click <strong>OK</strong> when it’s set.</li>

</ul>



<p>Word will now resize your document to match the envelope.</p>



<h2>Part 2: Connect Your Data and Insert Address Fields</h2>



<h3>4. Connect to Your Address List</h3>



<ul>

  <li>Go to <strong>Mailings → Select Recipients → Use an Existing List</strong>.</li>

  <li>Browse to your saved TextMyLink CSV or Excel file.</li>

  <li>Choose the correct worksheet if prompted (usually “Sheet1”).</li>

  <li>Click <strong>Edit Recipient List</strong> to filter or remove anyone you don’t need, then click <strong>OK</strong>.</li>

</ul>



<p>You’ve now connected your guest list to Word.</p>



<h3>5. Insert the Delivery Address Block</h3>



<ul>

  <li>Click in the main area where you want the address to go (center of the envelope).</li>

  <li>On the <strong>Mailings</strong> tab, click <strong>Address Block</strong>.</li>

  <li>Pick your preferred name format.</li>

  <li>Click <strong>Match Fields</strong> if the street or city fields look off, then map them manually.</li>

</ul>



<p><strong>Pro Tip:</strong> If your preview shows uneven spacing or extra blank lines, delete the <code>«AddressBlock»</code> and insert each field yourself. <strong>Crucially, use a soft return (Shift + Enter)</strong> after every line, like after <code>«Formal_Name»</code> or <code>«Address»</code>. This forces a clean line break without adding the extra paragraph spacing Word loves to insert, giving you full control over how tightly each line prints.</p>



<p>Once everything looks good, click <strong>OK</strong>.</p>



<h3>6. Add Your Return Address (Optional)</h3>



<p>If you didn’t include one in setup, type your return address manually in the top-left corner. You can make it elegant later with a script font or color.</p>



<h2>Part 3: Preview and Print</h2>



<h3>7. Preview the Results</h3>



<ul>

  <li>Click <strong>Preview Results</strong> on the <strong>Mailings</strong> tab.</li>

  <li>Scroll through a few records to confirm spacing, alignment, and fonts.</li>

</ul>



<p>If names or lines look uneven, adjust now. Smaller fonts, around 10–11 pt, often look cleaner on smaller envelopes.</p>



<h3>8. Complete the Merge and Print</h3>



<p>When everything looks perfect:</p>



<ul>

  <li>Go to <strong>Finish &amp; Merge → Print Documents</strong>.</li>

  <li>Choose <strong>All</strong> to print your full list, or <strong>Current Record</strong> for a test.</li>

  <li>In the printer dialog, make sure the paper size matches your envelope size.</li>

  <li>Load one test envelope first.</li>

</ul>



<p><strong>The #1 Envelope Printing Hack: Use the Rear-Feed Slot.</strong> If your printer has a rear-feed slot, always use it. Envelopes feed much straighter and print cleaner through a rear tray than the curved front-loading path, which eliminates most alignment headaches.</p>



<p>If the test looks perfect, load the full batch and print.</p>



<h2>Bonus: Printing Address Labels in Canva (If You Want a Design Touch)</h2>



<p>If you’d rather use labels instead of printing directly on envelopes, Canva makes it easy and lets you match your stationery style.</p>



<p>Here’s how to do it:</p>



<ul>

  <li>Go to <a href="https://www.canva.com" target="_blank" rel="noopener">Canva.com</a> and search for Address Label Template.</li>

  <li>Pick a design that matches your theme and customize fonts and colors.</li>

  <li>Open <strong>Apps → Bulk Create</strong>.</li>

  <li>Upload your <strong>TextMyLink CSV</strong>.</li>

  <li>Insert placeholders for each field, such as <code>{Formal Name}</code>, <code>{Address}</code>, <code>{City}</code>.</li>

  <li>Click <strong>Continue → Generate</strong>, then export as <strong>PDF Print</strong>.</li>

  <li>Print on full-sheet sticker paper or Avery 5160 labels.</li>

</ul>



<p>It’s mail merge meets design, without the font headaches.</p>



<h2>Why Start With TextMyLink</h2>



<p>The hardest part isn’t printing, it’s collecting clean data. <strong>TextMyLink</strong> solves that from the start. You send one text link, guests enter their info, and your list stays tidy and current.</p>



<p>Even better, the export is already formatted for you, so it drops straight into Word or Canva without extra editing. One list can carry you through <strong>save-the-dates, invitations, and thank you cards</strong> without rebuilding anything.</p>



<h2>Takeaway</h2>



<p>Printing your own wedding envelopes or labels is totally doable once you know the steps. A clean TextMyLink list, a spreadsheet, and a few clicks in Word or Canva... that’s all it takes to look like you hired a pro.</p>



<p>If you’re in the middle of this right now, hang in there. Do one test envelope, adjust once, and celebrate when the first perfect one comes out. The little victories matter during wedding season.</p>
