let clients = []

const status = async (req, res) => res.json({clients: clients.length})

const eventsHandler = async (req, res) => {
    const headers = {
        'Content-Type': 'text/event-stream',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache'
    }
    res.writeHead(200, headers)

    //const data = `data: ${JSON.stringify(facts)}\n\n`;
    //res.write(data);

    const clientId = req.params.id

    const newClient = {
        id: clientId,
        response: res
    }

    clients.push(newClient)

    req.on('close', () => {
        console.log(`${clientId} Connection closed`)
        clients = clients.filter(client => client.id !== clientId)
    })
}

async function sendEventsToAll(newNotification) {
    clients.forEach(client => client.response.write(`data: ${JSON.stringify(newNotification)}\n\n`))
}





module.exports = {
    status,
    eventsHandler,
    sendEventsToAll
}
