
# Welcome!


In order to run this application, you will need to go to https://qaminn2468.github.io/frontend-nanodegree-feedreader/ .  Click 'download'.  Click 'download zip'.  Choose where you would like the file to reside. (In this example, we will use the Chrome browser.) Open Chrome.  Press CTRL-O.  Choose index.html from within the downloaded folder.  The page will load.  It will display articles from the Navy Times.  To choose a different feed, click the hamburger icon.  To view the test suite results, scroll to the bottom of the page.




## Choices

The choices of article topics are:
<ul>
<li>Navy Times - displays articles of interest to the entire US Navy.</li>
<li>Veterans - a list of articles of interest to those who were previously Active Duty within the US Military.</li>
<li>Military Family - articles of interest to the family members of Active Duty US Military Members.</li>
<li>Transition - These articles are targeted to those transitioning from US military service to the civilian sector.</li></ul>




### Options

<ul>
<li> **Click** to open the article in the current window.</li>
<li> **Right click** to open the article into a new window.  This allows the feed to remain accessible.</li>
</ul>


### Overview of Test Suites used

<ul>
<li> **Suite 1 - RSS Feeds** </li>
<li>     test 1 - are defined</li>
<li>     test 2 - URL is defined</li>
<li>     test 3 - name is defined</li>
</br>
<li> **Suite 2 - The Menu** </li>
<li>     test 1 - is hidden</li>
<li>     test 2 - menu icon changes menu-hidden</li>
</br>
<li> **Suite 3 - Initial Entries** </li>
<li>     test 1 - status of feed</li>
</br>
<li> **Suite 4 - New Feed Selection** </li>
<li>     test 1 - verify content is new</li>
</br>
<li>** I considered adding a test to verify each entry was unique (I had had one load where there was a duplicate entry).  I intended to loop through the feed array, checking each pair of entries to verify the pair did not match.</li>
</ul>




### Ideas for Others

-Change the RSS feeds to those you would enjoy. To do this, go to the JS folder, open app.js, and edit the allFeeds array (line 10). Additions and deletions are also possible.



### Footnotes

This is the fourth project for the Grow with Google Scholarship of the Udacity Front-End Development Nanodegree.  

I reviewed documentation by Jasmine, MND, W3schools, Stack Overflow, and Matthew Cranford (https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/ and https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/).

Enjoy! </br>
**KMcC**
August 2018
