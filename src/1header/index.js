// //check version of data to see if we need to update it

// //have to think about if we exceed storage quota, so we would need to check for how much space
// //we need before we write, and then, if we need more, request more from the user before we write.
// //of course, that is async, so somehow we have to save the state while we wait for the user to respond
// ;(function(){
// 	"use strict";

// 	function SpectralKitten()
// 	{
// 		//check for new card data in the background
// 		//if new data, load and cache
// 	}
	
// 	SpectralKitten.CARD_FILE_NAME = "cards.json";

// 	//private / hidden
// 	//will this be shared across all instances of SpectralKitten?
// 	var _cards;
	
// 	Object.defineProperty(
// 		SpectralKitten.prototype,
// 		"cards",
// 		{
// 			get:function(){
// 				return _cards;
// 			}
// 		}
// 	);

// 	SpectralKitten.prototype.loadCards = function(callback, errorCallback)
// 	{
// 		//option to override cache / force update

// 		//check if card data has been cached

// 		//have to ache images, need to figure out
// 		//phone gap can only write text files
// 		//might need to write a plugin to cache binary files
// 		//maybe from base64 string, or from a URL

// 		var loadRemoteData = function(fs)
// 		{
// 			$.ajax({
// 				url:"all_cards.json",
// 				dataType:"json",
// 				success:function(data, code, jqXHR )
// 				{
// 					_cards = data.cards;

// 					var errorWritingData = false;
// 					fs.root.getFile(
// 						SpectralKitten.CARD_FILE_NAME,
// 						{create: true},
// 						function(fileEntry)
// 						{
// 							// Create a FileWriter object for our FileEntry (log.txt).
// 							fileEntry.createWriter(
// 								function(fileWriter)
// 								{
// 									fileWriter.onwriteend = function(e)
// 									{
// 										if(!errorWritingData)
// 										{
// 											console.log('Write completed.');
// 										}
// 									};

// 									fileWriter.onerror = function(e)
// 									{
// 										errorWritingData = true;
// 										console.log("Error caching data.");
// 									};

// 									// Create a new Blob and write it to log.txt.
// 									var bb = new WebKitBlobBuilder(); // Note: window.WebKitBlobBuilder in Chrome 12.
// 									bb.append(JSON.stringify(_cards));
// 									fileWriter.write(bb.getBlob('text/plain'));

// 									//do we need to close this?
// 								},
// 								function(e)
// 								{
// 									console.log("a");
// 									errorHandler(e);
// 								}
// 							);
// 						},
// 						function(e)
// 						{
// 							console.log("b");
// 							errorHandler(e);
// 						}
// 					);
					
// 					if(callback)
// 					{
// 						callback(_cards);
// 					}
// 				},
// 				error:function(jqXHR, msg, e)
// 				{
// 					console.log("c");
// 					errorCallback(msg, e);
// 				}
// 			});			
// 		};

// 		var errorHandler = function(e /*FileError*/)
// 		{
// 			var msg = '';

// 			switch (e.code) {
// 				case FileError.QUOTA_EXCEEDED_ERR:
// 					msg = 'QUOTA_EXCEEDED_ERR';
// 					break;
// 				case FileError.NOT_FOUND_ERR:
// 					msg = 'NOT_FOUND_ERR';
// 					break;
// 				case FileError.SECURITY_ERR:
// 					msg = 'SECURITY_ERR';
// 					break;
// 				case FileError.INVALID_MODIFICATION_ERR:
// 					msg = 'INVALID_MODIFICATION_ERR';
// 					break;
// 				case FileError.INVALID_STATE_ERR:
// 					msg = 'INVALID_STATE_ERR';
// 					break;
// 				default:
// 					msg = 'Unknown Error';
// 					break;
// 			}

// 			console.log(e);
// 			console.log('Error: ' + msg);
// 		};

// 		(window.requestFileSystem || window.webkitRequestFileSystem)
// 		(
// 			window.PERSISTENT, 
// 			1024 * 1024 * 10000 /*10 megs*/,
// 			function(fs /*FileSystem*/)
// 			{
// 				fs.root.getFile(
// 					SpectralKitten.CARD_FILE_NAME,
// 					{},
// 					function(fileEntry)
// 					{
// 						// Get a File object representing the file,
// 						// then use FileReader to read its contents.
// 						fileEntry.file(
// 							function(file)
// 							{
// 								var reader = new FileReader();

// 								reader.onloadend = function(e)
// 								{
// 									var data = this.result;
// 									//data should be here
// 									if(!data.length)
// 									{
// 										console.log("cache file is empty");
// 										loadRemoteData(fs);
// 									}
								
// 									//todo: catch error here in case data is corrupted
// 									//if it is, clear file, and then load data from the server
// 									try
// 									{
// 										_cards = JSON.parse(data);
// 										if(callback)
// 										{
// 											callback(_cards);
// 										}
// 									}
// 									catch(e)
// 									{
// 										console.log("cached json data is corrupt");
// 										loadRemoteData(fs);
// 									}
// 								};
// 								reader.readAsText(file);
// 				    		}, 
// 							function(e)
// 							{
// 								console.log("d");
// 								errorHandler(e);
// 								loadRemoteData(fs);
// 							}
// 						);
// 					}, 
// 					function(e)
// 					{
// 						console.log("e");
// 						errorHandler(e);
// 						loadRemoteData(fs);
// 					}
// 				);
// 			}, 
// 			function(e)
// 			{
// 				errorHandler(e);
// 				loadRemoteData(fs);
// 			}
// 		);
// 	}
// 	window.SpectralKitten = SpectralKitten;
// }());

function handleTestPinia( ) {
	console.log("click nè")
}