
module.exports = function(request, response)
{
    response
        .set("Content-Type", "application/ld+json")
        .json({
            "@context": {
                "hydra": "http://www.w3.org/ns/hydra/core#",
                "vocab": process.env.url + "/hydra/event-api/vocab#",
                "Event": "http://schema.org/Event",
                "name": "http://schema.org/name",
                "description": "http://schema.org/description",
                "start_date": {
                    "@id": "http://schema.org/startDate",
                    "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
                },
                "end_date": {
                    "@id": "http://schema.org/endDate",
                    "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
                }
            }
        })
}