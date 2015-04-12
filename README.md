# TextSearch
Google places API (https://developers.google.com/places/webservice/search#TextSearchRequests) to create a small one-page web app that shows a list of all places retrieved from this API, and allows the user to filter by certain characteristics.

#Header Area
Header area is constructed with a single DIV by using shadows(CSS3) for :before and :after psuedo elements

#Responsive layout
Page is responsive. Re-size the page to reduce the width and check the behavior.
1. Full screen: Search inputs on right side and results on right side
2. Tablet size: Search and filters will come on top followed by results
3. Mobile size: Only search input on top followed by results. On hover of input, filter options will be shown.

#Seach
Shows the places returned by place API of Google in the results area.
I am not able understand behavior of filter. Because it is for front-end role, I have covered UI part of it. If there is an associate service with a given filter then, on selection of a filter correspnding service can be triggered and populate the result.

#Resize of search area
Search can be resizable in Full screen width(ie when search inputs are on left side). Hover the mouse on the vertical seperator b/w left and right areas. And use it for re-size.

#Deletion of palce
Drag a place, which show an area to drop. And on drop into that area, place will be removed from the list.
