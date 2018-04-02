module.exports = function(request, response) 
{
    response
        .set("Content-Type", "application/ld+json")
        .json({
                "@context": "/hydra/event-api/contexts/Event.jsonld",
                "@id": "/hydra/event-api/events/130",
                "@type": "Event",
                "name": "Halloween",
                "description": "This is halloween, this is halloween",
                "start_date": "2015-10-31T00:00:00Z",
                "end_date": "2015-10-31T23:59:59Z"
        })
}