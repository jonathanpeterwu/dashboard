
    var ideaArray = [
      {
        title: "Build Schools",
        description: "my water fundraising for campaigns",
        notes: "Build schools using the charitywater model",
        category: "nonprofit",
        github: "https://github.com/jonathanpeterwu/BuildASchool",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Coin Fund",
        description: "raise capital through cryptocurrencies",
        notes: "Reducing the friction of raising capital and funding projects",
        category: "currency",
        github: "https://github.com/jonathanpeterwu/stockcoin-webapp",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Tesla Car Share",
        description: "EV car-share/co ownership",
        notes: "Reducing the cost of car ownership by maximizing sharing",
        category: "transportation",
        github: "https://github.com/jonathanpeterwu/splitEV",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Maker Camp",
        description: "Hardware Focused 9-12 week accelerated learning program",
        notes: "Mimicking devbootcamp leraning style but with hardware",
        category: "education",
        github: "https://github.com/jonathanpeterwu/makerCamp",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "PetSafe",
        description: "Hardware/Software to keep your pets safe",
        notes: "running collars, car airbags, seatbelts, etc",
        category: "pets",
        github: "https://github.com/jonathanpeterwu/makerCamp",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Samantha",
        description: "Your digital/physical personal assistant",
        notes: "good morning 'johnny' -its 7:15 am you have a meeting at 8am  - traffic will take you bout 1000",
        category: "personal",
        github: "https://github.com/jonathanpeterwu/samantha",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Samantha Health",
        description: "Your digital/physical personal medical assistant",
        notes: "good morning 'grandma', your blood pressure is 80/120 today, please take these medicines, your breathing capacity is 90%",
        category: "personal",
        github: "https://github.com/jonathanpeterwu/samantha-health",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Samantha Home",
        description: "Your automated smart home system",
        notes: "Nest automated home system",
        category: "personal",
        github: "https://github.com/jonathanpeterwu/samantha-home",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Wellness Digital",
        description: "Integrated preventative health diagnostic testing",
        notes: "$30/month to test/track and analyze your body profile",
        category: "health",
        github: "https://github.com/jonathanpeterwu/wellnessDigital",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "HyperHop",
        description: "Hyperlocal automated transportation",
        notes: "Using automated scooters/wheelchairs/bikes pickup/dropoff anywhere",
        category: "transportation",
        github: "https://github.com/jonathanpeterwu/hyperhop",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "HyperDrop",
        description: "Automated 24/7 mail delivery systems",
        notes: "Using automated delivery routes/trucks - last mile delivery solutions",
        category: "transportation",
        github: "https://github.com/jonathanpeterwu/hyperdrop",
        keen: {
          timestamp: new Date().toISOString()
        }
      },
      {
        title: "Project Dwell",
        description: "Tiny Home meets urban living",
        notes: "Solution to overcrowding in urban areas",
        category: "housing",
        github: "https://github.com/jonathanpeterwu/projectdwell",
        keen: {
          timestamp: new Date().toISOString()
        }
      }
    ]

    _.each(ideaArray, function(idea) {
      client.addEvent("ideas", idea);
    })