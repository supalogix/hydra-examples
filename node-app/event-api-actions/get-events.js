module.exports = function(request, response) 
{
    response
        .set("Content-Type", "application/ld+json")
        .set("Link", "<" + process.env.url + "/hydra/event-api/vocab>; rel=\"http://www.w3.org/ns/hydra/core#apiDocumentation\"")
        .json({
            "@context": "/hydra/event-api/contexts/EventCollection.jsonld",
            "@id": "/hydra/event-api/events/",
            "@type": "EventCollection",
            "members": [
                {
                    "@id": "/hydra/event-api/events/130",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/131",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/132",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/133",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/134",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/135",
                    "@type": "http://schema.org/Event"
                },
                {
                    "@id": "/hydra/event-api/events/136",
                    "@type": "http://schema.org/Event"
                }
            ] 
    });
}