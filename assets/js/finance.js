 var financeArray =  [
  	  {
  	  	account: "Citi ThanYou",
  	  	amount: -793.10,
  	  	month: 10,
  	  	year: 2014,
  		  keen: {
  	    	timestamp: new Date().toISOString()
  	  	}
  	  },
      {
        account: "Citi ThankYou",
        amount: 0,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Freedom",
        amount: -2750,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Freedom",
        amount: -2100,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Freedom",
        amount: -626.11,
        month: 9,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Preferred",
        amount: -2561.92,
        month: 1,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Preferred",
        amount: 0,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Citi ThankYou",
        amount: -1592.19,
        month: 1,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Citi ThankYou",
        amount: -793.19,
        month: 9,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Amex Delta",
        amount: -1300.28,
        month: 1,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Amex Delta",
        amount: 0,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Citi AmericanAirlines",
        amount: -1288.93,
        month: 9,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Citi AmericanAirlines",
        amount: 0,
        month: 5,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Barclay Travelocity",
        amount: -827.37,
        month: 9,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Barclay Travelocity",
        amount: -1300,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Coinbase",
        amount: 300,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Coinbase",
        amount: 700,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Circle",
        amount: 100,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Circle",
        amount: 150,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Acorn",
        amount: 0,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Acorn",
        amount: 100,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Betterment",
        amount: 2350,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Betterment",
        amount: 3070,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Merrill Edge",
        amount: 0,
        month: 10,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Merrill Edge",
        amount: 260,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Amazon",
        amount: -510.27,
        month: 5,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Amazon",
        amount: -350,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase United",
        amount: -2556.01,
        month: 5,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase United",
        amount: 0,
        month: 11,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        account: "Chase Preferred",
        amount: -4566.42,
        month: 5,
        year: 2014,
        keen: {
          timestamp: new Date().toISOString()
        }
      }
    ]

    _.each(financeArray, function(finance) {
      client.addEvent("finances", finance);
    })
