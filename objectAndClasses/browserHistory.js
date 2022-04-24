function browserHistory(browserBook, commands) {
    for (let data of commands) {
        let [command, ...site] = data.split(' ');
        site = site.join(' ');
        if (command == 'Open') {
            browserBook['Open Tabs'].push(site);
            browserBook['Browser Logs'].push(data);
        } else if (command == 'Close') {
            if (browserBook['Open Tabs'].includes(site)) {
                let index = browserBook['Open Tabs'].indexOf(site);
                browserBook['Open Tabs'].splice(index, 1);
                browserBook['Recently Closed'].push(site);
                browserBook['Browser Logs'].push(data);
            }
        } else if (command == 'Clear') {
            for (let key in browserBook) {
                delete browserBook[key];
            }
        }
    }
    console.log(browserBook);
}
browserHistory({
    "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google", "Clear History and Cache"]
);