# Node RED ical events 

## under active development

This Node RED module gets the events from an ical-URL or from a caldav-server.

> Node-RED is a tool for wiring together hardware devices, APIs and online services in new and interesting ways.

If you like it, please consider:

<a target="blank" href="https://brave.com/nai412"><img src="./examples/support_banner.png"/></a>
<a target="blank" href="https://paypal.me/NeumannBenjamin"><img src="https://img.shields.io/badge/Donate-PayPal-blue.svg"/></a>
<a target="blank" href="https://blockchain.info/payment_request?address=3KDjCmXsGFYawmycXRsVwfFbphog117N8P"><img src="https://img.shields.io/badge/Donate-Bitcoin-green.svg"/></a> 

## Getting started

First of all install [Node-RED](http://nodered.org/docs/getting-started/installation)

```
$ sudo npm install -g node-red
```

Then open  the user data directory  `~/.node-red`  and install the package

```
$ cd ~/.node-red
$ npm install node-red-contrib-ical-events
```

Or search for ical-events in the manage palette menu

Then run

```
node-red
```

## Develop

* git clone https://github.com/naimo84/node-red-contrib-ical-events.git
* cd node-red-contrib-ical-events
* npm install
* gulp
* cd ~/.node-red 
* npm install /path/to/node-red-contrib-ical-events

## Usage

### node explanation

#### events: 

The calendar is checked for new events on input or cronjob. For events in the future within the preview timespan, a separated cronjob is generated. It's fired on the start datetime of the ical event. So, on input or check-cronjob, no output is generated. Only when an event starts.

#### upcoming:

As of the events node, its checked on input or cronjob. The msg.payload contains a list of upcoming events.
Additional msg properties are:

* msg.today - number of upcoming events today
* msg.tomorrow - number of upcoming events tomorrow
* msg.total - number of upcoming events totally
* msg.htmlTable - a html formated table of upcoming events
* msg.payload - arraylist of upcoming events
  * date
  * summary
  * event
  * eventStart
  * eventEnd
  * description
  * id
  * allDay
  * rule
  * location

### Configuration:
- ***URL*** URL to Calendar
- ***Replace Dates with name*** Dates are formated in a readable way, like today, tommorrow, in 3 weeks,...
- ***Language*** if dates are replaced with names, the following languages are available at the moment Deutsch, English, русский, polski, Nederlands, français, Italiano, Espanol
- ***Cron*** cron-expression for checking the url, if no cron is specified, it's only checked on input.
- ***Username*** HTTP Basic authentication user
- ***Password*** HTTP Basic authentication user
- ***Type*** Type can be ical or caldav

instead of cron-expression, an input node can be used.

![example.png](https://github.com/naimo84/node-red-contrib-ical-events/raw/master/examples/example.png)

## Credits
* Thanks to https://github.com/kelektiv/node-cron
* Thanks to https://github.com/jens-maus/node-ical
* The whole module is inspired by ioBroker's adapter https://github.com/iobroker-community-adapters/ioBroker.ical. Many many thanks folks ;)

## The MIT License
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Coded with :heart: in :it:
