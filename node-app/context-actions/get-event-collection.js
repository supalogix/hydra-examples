module.exports = function(request, response)
{
    response
        .set("Content-Type", "application/ld+json")
        .json( {
        "@context": {
            "hydra": "http://www.w3.org/ns/hydra/core#",
            "vocab": process.env.url + "/hydra/event-api/vocab#",
            "EventCollection": "vocab:EventCollection",
            "members": "http://www.w3.org/ns/hydra/core#member"
        }
    }); 
}