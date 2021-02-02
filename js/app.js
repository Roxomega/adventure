const gameData = {      // Core Object/Game
    welcome: {  // Name of the scene
        msg: 'Welcome to your awesome adventure!',  // Generated Message for scene
        img: '../adventure/images/intro.jpg', // Generated image for scene
        buttons: [  // Generated Button for scene
            {
                text: 'Start', // Button text
                goto: 'intro' // Button data links to next scene
            }
        ]
    },
    intro: {
        msg: 'You are at the start of your adventure! Where do you go?',
        img: '../adventure/images/start.jpg',
        buttons: [
            {
                text: 'To Town',
                goto: 'town'
            },
            {
                text: 'Into the Woods',
                goto: 'woods'
            }
        ]
    },
    woods: {
        msg: 'You walk for hours with little trouble, as dusk sets in... Look out! Slimes!',
        img: '../adventure/images/slime.jpg',
        buttons: [
            {
                text: 'Reach for a Weapon.',
                goto: 'reach'
            },
            {
                text: 'Run!',
                goto: 'intro'
            }
        ]
    },
    reach: {
        msg: 'You reach for a weapon and quickly realize you have none',
        img: '../adventure/images/slime.jpg',
        buttons: [
            {
                text: 'Give it a punch!',
                goto: 'nowep'
            },
            {
                text: 'Run!',
                goto: 'intro'
            },
            
        ]
    },
    nowep: {
        msg: 'You sink your fist into the gelatinous monster and quickly realize this was a mistake as you become stuck and eaten.',
        img: '../adventure/images/dead.jpg',
        buttons: [
            {
                text: 'You die coverd in goo just like the gypsy predicted',
                goto: 'intro'
            },
            
        ]
    },
    town: {
        msg: 'There are many shops in the Bazaar which do you choose?',
        img: '../adventure/images/bazaar.jpg',
        buttons: [
            {
                text: 'Weapons Shop',
                goto: 'weapons'
            },
            // {
            //     text: 'Potions Shop',
            //     goto: 'potions'
            // },
            {
                text: 'Armor Shop',
                goto: 'armor'
            }
        ]
    },
    weapons: {
        msg: 'The weapon smith seems to barely notice you',
        img: '../adventure/images/shop.jpg',
        buttons: [
            {
                text: 'Becon him over, as youre interested in this Bastard Sword',
                goto: 'bstruth'
            },
            {
                text: 'Steal the closest weapon and run out',
                goto: 'steal'
            },
            {
                text: 'Walk around nonchalantly',
                goto: 'backside'
            }
        ]
    },
    bstruth: {
        msg: 'The shopkeep saunters over and eyes you menacingly. "Yes?" he says unenthusiastically.',
        img: '../adventure/images/wepkeep.jpg',
        buttons: [
            {
                text: 'I would like this sword',
                goto: 'sword'
            },
            {
                text: 'I dont like your attitude *ATTACK*',
                goto: 'guards'
            },
        ]
    },
    sword: {
        msg: '"Then you should buy it." the shopkeep says condescendingly.',
        img: '../adventure/images/wepkeep.jpg',
        buttons: [
            {
                text: 'You go into your coin purse only to notice you as broke as the typical adventurer with no current conquests.',
                goto: 'shopkeep'
            },
            {
                text: 'I dont like your attitude *ATTACK*',
                goto: 'guards'
            },
        ]
    },
    guards: {
        msg: 'You are surrounded by guards!  Gameover.',
        img: '../adventure/images/guards.jpg',
        buttons: [
            {
                text: 'You are arrested',
                goto: 'intro'
            },
        ]
    },
    shopkeep: {
        msg: 'The shopkeep is extremely unamused, Plebeian how dare you waste my time! I will see you flogged! GUARDS!',
        img: '../adventure/images/wepkeep.jpg',
        buttons: [
            {
                text: 'Explain yourself?',
                goto: 'guards'
            },
            {
                text: 'RUN!',
                goto: 'town'
            },
        ]
    },
    steal: {
        msg: 'You grab a halberd from a pile near the door, the shopkeep does not notice.  As you walk away with a smile you notice a regiment of the Queens guard standing three feet from you.  They have a concerned look at your weapon.  You gaze up at your weapon and notice why they are so perplexed.  This halberd bares the Queens insignia and you... are dressed in the rags of a commoner.  Guards tend to be of higher status, well-fed better educated but even a commoner would notice this weapon doesnt belong to you.  You are arrested. ',
        img: '../adventure/images/guards.jpg',
        buttons: [
            {
                text: 'Serve your time',
                goto: 'intro'
            }
        ]
    },
    backside: {
        msg: 'You are now at the back of the shop, you are certain no eyes are on you.  Determined to start your adventure you are GOING to need a way to defend yourself.',
        img: '../adventure/images/shop.jpg',
        buttons: [
            {
                text: 'Steal an axe!',
                goto: 'oneaxe'
            },
            {
                text: 'Steal two axes!!',
                goto: 'twoaxe'
            },
            {
                text: 'STEAL THREE AXES!!!',
                goto: 'threeaxe'
            }
        ]
    },
    threeaxe: {
        msg: 'You easily pick up two axes with both your hands but when you go for the third you drop one.  The loud clang alerts everyone in the store to your presence including an armed regiment of the Queens guard just outside.  Even though the guards presence is noticed this does not stop the easily annoyed pompous git of a shopkeep from yelling "GUARDS!" You are arrested.',
        img: '../adventure/images/guards.jpg',
        buttons: [
            {
                text: 'Two constants gravity and greed. The higher you climb the more power they have to crush you. Gameover',
                goto: 'intro'
            }
        ]
    },
    twoaxe: {
        msg: 'You easily pick up two axes with both your hands, a jolt of confidence hits you as you feel the heft of the weapons, feel the perfection in the grips, feel the start of a new you. No one notices you confidently swagger out of the store.',
        img: '../adventure/images/shop.jpg',
        buttons: [
            {
                text: 'Start your adventure proper',
                goto: 'senario2'
            },
            // {
            //     text: 'Go to Potions Shop',
            //     goto: 'potions'
            // },
            {
                text: 'Go to Armor Shop',
                goto: 'armor'
            }
        ]
    },
    oneaxe: {
        msg: 'You easily pick up the axe with one hand, a jolt of confidence hits you as you feel the heft of the weapon, feel the perfection in the grip, feel the start of a new you.  You put the blade over your shoulder letting the haft rest on your shoulder as you stroll out of the store.  No one notices your crime. ',
        img: '../adventure/images/shop.jpg',
        buttons: [
            {
                text: 'Start your adventure proper',
                goto: 'senario1'
            },
            // {
            //     text: 'Go to Potions Shop',
            //     goto: 'potions'
            // },
            {
                text: 'Go to Armor Shop',
                goto: 'armor'
            }
        ]
    },
    // potions: {
    //     msg: 'As you enter the potion shop you notice the shopkeep seems a bit eccentric and playful.  As he is also the proprietor of these goods he also has to be intelligent to craft such mesmerizing concoctions.',
    //     img: '../adventure/images/potions.jpg',
    //     buttons: [
    //         {
    //             text: 'Wait for an opportunity and steal some health potions for your campaign.',
    //             goto: 'caught'
    //         },
    //         {
    //             text: 'Go up to the shopkeep and begin a dialog.',
    //             goto: 'convo'
    //         },
    //         {
    //             text: 'Nonchalantly walk around the store inspecting potion bottles.',
    //             goto: 'oops'
    //         }
    //     ]
    // },
    armor: {
        msg: 'You enter the armorer, the smith seems busy in the back working hard on orders.  His daughter is running the counter, she seems uninterested in her duties. ',
        img: '../adventure/images/armor.jpg',
        buttons: [
            {
                text: 'Wait for an opportunity and steal some armor.',
                goto: 'oops'
            },
            {
                text: 'Go up to the shopkeep and begin a dialog.',
                goto: 'convo'
            },
            {
                text: 'Nonchalantly walk around the store inspecting the armor.',
                goto: 'walk'
            }
        ]
    },
    oops: {
        msg: 'Standing at the door you do not have to wait long for an opportunity, the smith is busy and his daughter is daydreaming piece by piece you slowly put on some armor and easily walk out the door. ',
        img: '../adventure/images/armor.jpg',
        buttons: [
            {
                text: 'step outside',
                goto: 'outside'
            },
            
        ]
    },
    outside: {
        msg: 'GET BACK IN RANK! You step outside and the queens guard is everywhere and you presently encladed in her magisties finest armor now have to play this situation just right.',
        img: '../adventure/images/guards.jpg',
        buttons: [
            {
                text: 'Stay in rank march in cadence',
                goto: 'guardsmen'
            },
            {
                text: 'Step away at the first oppertunity',
                goto: 'breakrank'
            },
            
        ]
    },
    breakrank: {
        msg: 'You wait for when you feel the least amount of eyes apon you and try to depart from the ranks.  You get spotted, you try to run but the armor weighs you down. ',
        img: '../adventure/images/armor.jpg',
        buttons: [
            {
                text: 'Stay in rank march in cadence',
                goto: 'guards'
            },
            
        ]
    },
    guardsmen: {
        msg: 'You march for hours, the town doesnt even appear in the distance.  The guards set up camp, you help.  You volenteer to take one of the night watch shifts.',
        img: '../adventure/images/camp.jpg',
        buttons: [
            {
                text: 'Sneak away in the dead of night',
                goto: 'senario2'
            },
            {
                text: 'Sneaking out now as your watch partner fell asleep would leave them vulnerable, you dont have it in you to risk their lives selfishly.',
                goto: 'senario5'
            },
            
        ]
    },
    senario5: {
        msg: 'WIP where you end up shrugging off your life of adventure and somehow navigate not getting caught as you become a stable guardsmen',
        img: 'http://via.placeholder.com/100x100',
        buttons: [
            {
                text: 'WIP start over',
                goto: 'intro'
            },
            
            
        ]
    },
    
    convo: {
        msg: 'You walk up to the counter, the shopkeep does not look up from her charts.  You notice there is a delivery due out today and decide to use this as an opportunity. ',
        img: 'http://via.placeholder.com/100x100',
        buttons: [
            {
                text: 'Excuse me mlady but Im here to pick up the armor for the dukes son.',
                goto: 'senario4'
            },
            
        ]
    },
    walk: { // lol dating sim
        msg: 'WIP Will be an adventure finale where you end up settling down with the blacksmiths daughter or the handsome custodian forgoing a life of extrodinary adventure for a more local adventure',
        img: '../adventure/images/redhead.jpg',
        buttons: [
            {
                text: 'WIP start over',
                goto: 'intro'
            },
            
        ]
    },
    senario2: {
        msg: 'You sucsessfully sneak away in the dead of night and now have a decsion to make.  Walk back to town or start your adventure here.',
        img: '../adventure/images/night.jpg',
        buttons: [
            {
                text: 'Lets go get more supplies',
                goto: 'town2'
            },
            {
                text: 'enough wasting time lets go.',
                goto: 'senario3'
            },
            
        ]
    },
    town2: {
        msg: 'You head back into town',
        img: '../adventure/images/bazaar.jpg',
        buttons: [
            {
                text: 'Weapons Shop',
                goto: 'weapons2'
            },
            
            
        ]
    },
    weapons2: {
        msg: 'The weapon smith seems to barely notice you',
        img: '../adventure/images/shop.jpg',
        buttons: [
            {
                text: 'Becon him over, as youre interested in this Bastard Sword of Truth',
                goto: 'bstruth2'
            },
            {
                text: 'Steal the closest weapon and run out',
                goto: 'steal2'
            },
            {
                text: 'Walk around nonchalantly',
                goto: 'backside2'
            }
        ]
    },
    bstruth2: {
        msg: 'WIP',
        img: '../adventure/images/wepkeep.jpg',
        buttons: [
            {
                text: 'WIP startover',
                goto: 'intro'
            }
        ]
    },
    steal2: {
        msg: 'You grab a halberd from a pile near the door, the shopkeep does not notice.  As you walk away with a smile you notice a regiment of the Queens guard standing three feet from you.  They look at you for a second then carry on about their buisness.',
        img: '../adventure/images/guards.jpg',
        buttons: [
            {
                text: 'Armored and Equiped lets start this adventure off proper.',
                goto: 'senario6'
            }
        ]
    },
    backside2: {
        msg: 'WIP',
        img: 'http://via.placeholder.com/100x100',
        buttons: [
            {
                text: 'WIP start over',
                goto: 'intro'
            }
        ]
    },
    senario3: {
        msg: 'WIP',
        img: 'http://via.placeholder.com/100x100',
        buttons: [
            {
                text: 'start over',
                goto: 'intro'
            },
            
            
        ]
    },
    senario4: {
        msg: 'WIP you take the armor on a cart and chose your next step',
        img: 'http://via.placeholder.com/100x100',
        buttons: [
            {
                text: 'WIP back to intro',
                goto: 'intro'
            },
            
        ]
    },
    senario6: {
        msg: 'WIP but there will be a dragon... maybe a wizard or two',
        img: '../adventure/images/dragon.jpg',
        buttons: [
            {
                text: 'Armored and Equiped lets start this adventure off proper.',
                goto: 'intro'
            }
        ]
    },
}



function addScene(scene) {  // Function adds the scene
    const game = document.getElementById('game');  // Variable targeting HTML div
    let div = document.createElement('div'); // Creating a div
    div.className = 'scene'; // adding a class to the div

    let img = document.createElement('img'); // Creating the HTML for the scene img
    img.src = gameData[scene].img; // adding the img source
    div.appendChild(img); // adding the image to the div

    div.innerHTML += `<h2>${gameData[scene].msg}</h2>` // adds what's in the msg in the core to the div while giving it the h2 properties

    for(const button of gameData[scene].buttons) { // core function handles the data of the add scene buttons
        let btn = document.createElement('button'); // Creates the button
        btn.addEventListener('click', handleClick); // Adds the ability to click the button to engage
        btn.innerText = button.text; // Adds the button text from the text written in the scene
        btn.dataset.goto = button.goto; // this is needed to transition to the next scene using the name of the scene in the data
        div.appendChild(btn); //Pins it on the div
    }
    game.appendChild(div); //Pins the div

}

function handleClick(event) { // continuation of the button loop
    const game = document.getElementById('game'); // Variable targeting the core HTML div
    game.innerHTML = ''; 
    let goto = event.target.dataset.goto; // sets goto to what is typed out in the goto section of the scene
    addScene(goto); // How I transition after clicking

}
addScene('welcome');     // How to Start it