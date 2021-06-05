const getEvents = () => {
    const predictions = {
        who: ["You","Your best friend", "Your Dad","Your Mum","Your cousin"],
        where: ["at home", "at work", "at school", "in the woods", "in bed", "at school"],
        what: ["die", "win the lottery", "fall in love", "stub a toe", "have a meaningful conversation"]
    }
 
    let events = [];
    events.push (predictions.who[Math.floor(Math.random()*predictions.who.length)]);
    events.push (predictions.where[Math.floor(Math.random()*predictions.where.length)]);
    events.push (predictions.what[Math.floor(Math.random()*predictions.what.length)]);
    return events
}

console.log(getEvents())

