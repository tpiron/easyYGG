// Wait until the page is loaded
window.onload = function () {
	addTorrentsColumn();
}

// addTorrentsColumn adds a torrent column that you can download in one click
function addTorrentsColumn () {
		var torrentLink = "https://www2.yggtorrent.gg/engine/download_torrent?id="
		var t = document.getElementsByClassName("table-responsive results")
		
		// There can be multiple 'table-responsive results', so let's go over them one by one
		for (var j = 0; j < t.length; j++) {
			var torrents = t[j].getElementsByTagName('tbody')[0]
			var torrentHead = t[j].getElementsByTagName('thead')[0]

			// TH Download element
			var th_dl = document.createElement('th');
			th_dl.width="63px";
			th_dl.innerHTML="DL";
			th_dl.className="no"

			// Add Download column
			torrentHead.getElementsByTagName("tr")[0].appendChild(th_dl);

			// Add TD elements in each rows, containing the torrent
			for (var i = 0; i < torrents.getElementsByTagName("tr").length; i++) {

				var torrent = torrents.getElementsByTagName("tr")[i]
				var td_dl = document.createElement('td');
				td_dl.align="center";
				td_dl.innerHTML=torrent.getElementsByTagName("td")[2].innerHTML;
	
				// Extract the torrentID
				var regex = /target=\"(\d+)/i;
				var torrentID = td_dl.innerHTML.match(regex);
	
				// Add torrent URL
				td_dl.innerHTML="<a href=" + torrentLink + torrentID[1] + "><img src=\"https://www2.yggtorrent.gg/static/img/nfo.gif\"></a>"
				td_dl.children[0].className = td_dl.children[0].className + " dl";
				torrent.appendChild(td_dl);
			};
		};
}