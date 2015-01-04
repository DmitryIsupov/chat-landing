App.Text = DS.Model.extend({
  body: DS.attr('string'),
  linkId: function() {
    var id = this.get('id')
    return '#collapse-' + id;
  }.property('id'),
  panelId: function() {
    var id = this.get('id')
    return 'collapse-' + id;
  }.property('id'),
  summary: function() {
    var body = this.get('body');

    var s = body + ''
    return s.substr(0, 50) + '...';
  }.property('body'),
});

App.Text.reopenClass({
  FIXTURES: [
    {
        "id": "1",
        "body": "Great app well designed and laid out. Quite intuitive and functional."
    },
    {
        "id": "2",
        "body": "As an owner of property airbnb is fantastic way to earn an ROI from renting units to airbnb customers vs traditional renting. After 1 year of hosting airbnb's payout is better than renting monthly to traditional tenants! The same risks apply to renting via airbnb (bad guests bedbugs etc) yet airbnb minimizes this risk by utilizing a host:guest rating system. The host can rate each guest and vice versa. As long as each person is open and honest and has integrity airbnb is great which is why I say it's a great app for good people. Airbnb does penalize hosts for cancellations as well as guests. I like this app the most because I as a renter get compensated for the rent 24 hrs after the guest checks in which better than NEVER getting rent from dishonest renters with a sob story. I've never used airbnb as a guest but I plan to during future travels."
    },
    {
        "id": "3",
        "body": "The app makes searching very easy and user friendly on a mobile device. I lucked out with a great host on this site for monthly travel. I suggest you read reviews and find hosts that can sublease or that own their properties. Communication can still be a challenge if you have a lot of questions since you have to type everything in on mobile but it's not much of a big deal."
    },
    {
        "id": "4",
        "body": "I wanted to give feedback on the new iPhone app and desktop home page. I really don't like it! I no longer get my calendar on the first screen of my listing. I have to hunt for it on a further screen on the app. I can no longer access my reviews on the home page of the desktop version. That goes for the payments also. Those are the important things to see not how many times my listings were viewed along with a bar chart! Please go back to the original app and home page. I have 3 very active listings with you and I feel this is very important."
    },
    {
        "id": "5",
        "body": "This app is based in really creative idea and have been using for a long time. It is really nice if you meet a nice host luckily but life can't be fortunate all the time. On my last trip my reservation has been cancelled by host right before the trip and i had to find a place to stay when i actually arrived. They give no strong penalty to people who host. So they can cancel whenever they want. Second it is easy to use this system on the website but it is still difficult to use Airbnb on phones. You have to call to make cancellation and the waiting hour is at least 30 minutes... A tip for Airbnb please hire more people on the phone or upgrade app so people can actually make or correct cancellation without making call and waiting for 30 mins. And please please add stronger penalty for those hosts who cancels reservation right before the trip because that is huge disadvantage for travelers. Hope this review helps."
    },
    {
        "id": "6",
        "body": "The app is unstable. As usual hosts have fewer options. I'm shocked Airbnb has not improved its app but it is always lagging behind the growth of the business. I wish they'd stop putting their resources into local self-congratulatory events for hosts and just make the app the most functional it can be. Hosts are your ambassadors Airbnb. Don't forget it."
    },
    {
        "id": "7",
        "body": "This is an easy app to use not to mention an amazing concept of shared housing! I've been using the app for about half a year now and never had any problems."
    },
    {
        "id": "8",
        "body": "I love this service and look forward to one day having a vacation home to rent through the service until then I'll be using AirBnB in all my travels!"
    },
    {
        "id": "9",
        "body": "My friend told me about this when I was looking for someone to stay on my first trip out of the country it was best tip anyone has ever givenfor my friend and I to stay 18 days in Tokyo with an awesome view of Tokyo sky tree my hose was absolutely fabulous everyone to use this app"
    },
    {
        "id": "10",
        "body": "I knew this app through wsj that introduced it as a startup like Facebook. I like its ideaso I get it in the AppStore immediately. And then I booked an apartment in Singapore.everything goes smoothly. I like the trust among people cause it can creat a great miracle !"
    },
    {
        "id": "11",
        "body": "I was searching for an affordable option for our trip to Asheville NC and found it with AirBnB I just had I would have found it sooner! Though it was great because I was able to find a place with less than a weeks time."
    },
    {
        "id": "12",
        "body": "The full functionality of the website needs to be available on the app. In general the app provides most of the booking tools and communication tools are available but some regrettably are not."
    },
    {
        "id": "13",
        "body": "If you want free credit use the referral code: wtorres3"
    },
    {
        "id": "14",
        "body": "As long as your a smart person with a positive open mind. This is the greatest thing and app for any travelers. If you travel a lot airbnb is the way to go"
    },
    {
        "id": "15",
        "body": "I love AirBnB! As a host I not only make way more money renting my extra apartment to tourists than I could renting it monthly and i also get to meet lots of great people from all over the world! As a traveler I live like a local and get local perspective from my host. Not to mention that I have found amazing places to stay at prices and quality that a hotel can't touch! AirBnB is a game-changer!"
    },
    {
        "id": "16",
        "body": "Difficult to navigate as a host. Inbox is buried under another tab off the main menu for hosts but inbox is its own tab in the main menu for guests. The tabs for hosts are generally not as functional as they are for guests. "
    },
    {
        "id": "17",
        "body": "The app works ok but for how much airbnb collects via service fees I expect them to invest in developing a less quirky app and to have an actual iPad version of the app. It looks pert surely but lots of frustration in using it."
    },
    {
        "id": "18",
        "body": "We were very pleased with our stay at Jeni's apartment at 15 Wycoff. We knew we were in store for a treat when Jeni greeted us and showed us around her really neat apartment. Where do we start...? 1. Sooo convenient! 2. Totally well-equipped 3. Tastefully (and artfully) decorated. 4. Super clean We will most definitely stay there when we return to Cobble Hill! Ron and Jan Meyer"
    },
    {
        "id": "19",
        "body": "It should be easy to send and receive messages in 2014 but AirBnB has figured out how to make it a real chore. One of my hosts sent me three messages with important info about my stay. I received them in the app a week after the end of my stay! This is of course unacceptable and I will be asking both hosts and guests to use alternative messaging options from here on - the AirBnB app is just too unreliable."
    },
    {
        "id": "20",
        "body": "Es una app con un diseño único y superior a cualquier otra app. Excelente para efectuar las reservas y mantener comunicación con las personas que ofrecen sus hospedajes."
    },
    {
        "id": "21",
        "body": "It seems to be a great app thus far!!"
    },
    {
        "id": "22",
        "body": "This is the ideal place-to-stay application. You have every option out there. Also Airbnb is run by a great staff."
    },
    {
        "id": "23",
        "body": "Love this app! Easy to use. Much better than alternatives. Thank U!"
    },
    {
        "id": "24",
        "body": "This app is not very good for hosts. It has Iimited features and a lot of the features on the dashboard of the desktop version of the website are not available. When you try to type messages in the app it jumps around the screen so you can't see what you are typing. The app has a lot of bugs and limited functions. I rarely use it and instead try to use the desktop version of the website on my iPhone and iPad even though that is not very compatible with the iPhone or iPad."
    },
    {
        "id": "25",
        "body": "I've found beautiful apartments and homes thanks to this app. Thank you for making our vacations more enjoyable."
    },
    {
        "id": "26",
        "body": "Love the app! Easy to use and way better than booking a hotel."
    },
    {
        "id": "27",
        "body": "As a host I need better feature parity with the site. Nearly impossible to manage multiple listings with overlapping check ins."
    },
    {
        "id": "28",
        "body": "Fantastic app. Cheap stays and great way to meet people in a new city. :)"
    },
    {
        "id": "29",
        "body": "Had everything to be an amazing app. But it crushes every time I try to look at places or after searching in the map. The layout is good and the navigation is easy."
    },
    {
        "id": "30",
        "body": "WOW! That's all I can say about this. There's a coupon for first use "
    },
    {
        "id": "31",
        "body": "I used Airbnb for my trip to Spain and each place I stayed was exactly as described. I've never had any problems with the app and so far haven't seen any bug problems. I recommend Airbnb to anyone wanting to travel and not wanting to stay in a stuffy hotel."
    },
    {
        "id": "32",
        "body": "I've always wanted to use airbnb for travel but most of the time I'm a spontaneous traveler. Well I just booked my first place 10000 miles away no less. This is the best service. Beautifully designed and laid out app. Good work guys. UPDATE: still no complaints but seem to be having trouble with the today widget displaying my upcoming trips. The app shows them but not the widget."
    },
    {
        "id": "33",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos. Airbnb is also a great way to introduce bedbugs into your home or take them home with you after a stay. Bedbug removal is not covered under the 1000000 USD 'host guarantee'. Homeowners should call their insurance company to see if liability coverage extends to your airbnb rentals. The airbnb liability policy is secondary to your primary coverage."
    },
    {
        "id": "34",
        "body": "Availability and minimum stay is misleading. I've been declined so many times because of this either the unit is booked or 1 night is not enough. A lot of misleading listings and they will hold on to your money for 3-5 days even when you're denied."
    },
    {
        "id": "35",
        "body": "Do NOT use Apple pay from the app. Your credit card will be charged but the booking will not go through due to some "
    },
    {
        "id": "36",
        "body": "I'm a host and use the app a lot. Seems like every version that gets pushed has major bugs. This one has basic stability issues."
    },
    {
        "id": "37",
        "body": "Great product! However the new app upgrade is slooooow. Plus when I'm typing messages I can't see what I'm typing past 3-4 lines. Despite that...such a great company and app! Come stay with me in fountain valley ca at my 2 bedroom with a pool on a beautiful green belt!!!"
    },
    {
        "id": "38",
        "body": "I booked a room for one week for business & Bnb owner accepted my reservation. After talking with the owner he said I could take up the week after as well with my family. their rules listing stated they only wanted a certain number of guests was because they didn't want parties there but accepted my kids. So I was told to cancel my reservation and book both weeks. Well in doing so I was charged another Air BnB fee of 67$. I called customer service to ask to cancel the first fee because all this happened in the span of 30 minutes. It was an honest goof up. Even the owner didn't know this would happen. But customer service couldn't do a thing to help me and hosed me. "
    },
    {
        "id": "39",
        "body": "Lots of bugs in this version. It never updates the day it should or goes too far into the future and tells me guests are checking out when they still have another day with us. If you go into the section to report a guest everything is in another language. Please fix it never notifies me either!"
    },
    {
        "id": "40",
        "body": "Love it simple to use. Get it use it. Go places & meet people while doing so. :)"
    },
    {
        "id": "41",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! Overall you should definitely give it a try especially with the $25 off I gave you!!"
    },
    {
        "id": "42",
        "body": "This is a complete app for Airbnb. Can do everything except book for 28+ days on here. Would also like to be able to have a link to the property from the inbox. So if I send multiple inquiries I can quickly tap to see which space I'm talking about instead of having to exit the inbox and go to my wish list. Still a great app."
    },
    {
        "id": "43",
        "body": "Love the concept. Works very well if you're a respectful person."
    },
    {
        "id": "44",
        "body": "I don't know what got into Airbnb developers on iOS but they seem to do more and more a sloppy job with every release. The app is ubber sluggish and it takes forever to respond to a guest text it doesn't automatically scroll down and it's annoying beyond words. It populates wrong check out times and I have to regularly double check on the website to be sure which defies the point of having a mobile app! Notifications work that's awesome for a 4 billion$ company..."
    },
    {
        "id": "45",
        "body": "This app is worth using when traveling internationally."
    },
    {
        "id": "46",
        "body": "But there are some super frustrating features such as when you go to write a review of a guest and it auto advances but if it can't connect to the network immediately it erases everything you've written. It also thinks two days away is tomorrow. A variety of host features are also missing compared to the website. On the plus side messaging is way better on the app than the website which is surprising. Messaging is so basic and fundamental it's surprising both options are sub par."
    },
    {
        "id": "47",
        "body": "I just booked my next trip using Air BnB for the first time and I am very surprised with the ease of booking! I especially love the instabook option that allowed me to avoid the owner to take 2 or 3 days to make a decision. After all I'm an awesome guest and "
    },
    {
        "id": "48",
        "body": "Really bad app- shows listings that already booked resets filters on each tap any mistake in credit card and you need to reenter everything again"
    },
    {
        "id": "49",
        "body": "Overall the apps best feature is the ability for hosts and guests to communicate but that said the workflow that deals with a guests review and feedback needs work. For example editing your text is a pain and the cursor just defaults to the end of the paragraph so if you want to backtrack and edit you can't really view what you inputted. Secondly I wrote an entire review only to hit the back button and the review disappeared. That's poor design and will only cause less people to review their host. Good but please fix these simple things..."
    },
    {
        "id": "50",
        "body": "This is just an excessive in addition to already high fees. Also get better offline support."
    },
    {
        "id": "51",
        "body": "This review is based solely on the performance of the APP. I love the service but the app is really buggy in a few annoying ways: CONS: -when responding to messages in the inbox the text input box gets jumbled up and I can't see what I'm typing anymore. SUPER ANNOYING. Now I just compose my messages in another app (notes ) and copy paste because that's the only way I can get through it. -when searching airbnb listings the map search doesn't work consistently well. The prices aren't always accurate the listings disappear and reappear and sometimes listings appear even though they are unavailable! The worst is when you've done all this research on a listing you thought was available just to find out that it wasn't even available to begin with. The search function on an app like this needs to work really well because it's what the app is for--to search listings Pros: -the aesthetics of the app design is nice. It definitely looks really nice and easy to use. -easy to scroll through pictures Overall I would trade the aesthetics for better functionality."
    },
    {
        "id": "52",
        "body": "As a Air BnB host I do most of listing management on the phone app however the phone app lacks many if not most of the host tools such as alter a reservation payment history etc. Also in listing some information shows up on the web page but not on the app."
    },
    {
        "id": "53",
        "body": "There is a problem with the dates and calendar. The reservations are alerted one day before the actual date. This started after the last update. Please correct because I am a host and it is confusing and annoying."
    },
    {
        "id": "54",
        "body": "What I love about the app is you can edit everything on it from the app. Super nice interface. Exception search and filter capabilities. Check it out!!!"
    },
    {
        "id": "55",
        "body": "I love this app payment is quick and easy for hosts and it's a great place to find a unique and awesome place to stay on your next trip. Airbnb saved me financially when I lost my job and I'll forever be grateful. Don't hesitate to try it if you need to make some extra cash or want to find a cool spot to stay!"
    },
    {
        "id": "56",
        "body": "iPhone 6+ just speedtested my phone and pulling down 36Mb/sec...yet the images of properties take FOREVER to load more than 2-3pics sometimes they just don't load at all. Beyond infuriating. I rarely write reviews unless it's as ridiculous an issue as this that they can't figure out. Plz have your Dev team look into a CDN cacheing optimizing etc I almost can't even use this app. BTW your desktop image load times aren't much better and there I'm pulling down 350+Mb/sec which tells me it's a bigger issue than your app."
    },
    {
        "id": "57",
        "body": "As a host this app has lost me money. As a guest this app caused huge gaps in communication with hosts. This company is spending more time making 3D models of listings in their lobby than fixing their software and addressing guest/host issues. Their airbnb open event was totally unorganized and when I tried to communicate with my guest their iOS app doesn't allow me to reply to my guests more than 3 lines and then my words disappear. The old app worked great. It was solid. This new one has caused me to lose money and my ratings have gone down dramatically due to not knowing what's going on with my guests and new inquires that get lost in the cloud. Back to CraigsList..."
    },
    {
        "id": "58",
        "body": "Incorrect "
    },
    {
        "id": "59",
        "body": "Enter coupon: 91A454"
    },
    {
        "id": "60",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos. Airbnb is also a great way to introduce bedbugs into your home or take them home with you after a stay. Bedbug removal is not covered under the 1000000 USD 'host guarantee'. Homeowners should call their insurance company to see if liability coverage extends to your airbnb rentals. The airbnb liability policy is secondary to your primary coverage."
    },
    {
        "id": "61",
        "body": "On my iPhone 5 it freezes the phone completely. Please check into it ASAP."
    },
    {
        "id": "62",
        "body": "Love this app! It's so pretty and easy to use. Perfect for traveling: you do not need your computer. Book on the go! Be spontaneous and adventurous. Happy Travels!"
    },
    {
        "id": "63",
        "body": "Great!"
    },
    {
        "id": "64",
        "body": "We've used Airbnb twice already and we've been satisfied both times! It's an awesome way of traveling cheap instead of paying more for hotels and yet we get to meet new people. There's always pros and cons to everything but this service is definitely for the adventurous not for the uptight picky or sensitive."
    },
    {
        "id": "65",
        "body": "Cancelled 5 days after I paid everything"
    },
    {
        "id": "66",
        "body": "Used to work last update broke it"
    },
    {
        "id": "67",
        "body": "Simply the slowest app I have ever used. For me to do something as simple as load the app and send a message takes literally 30-45 seconds before I can even start to type. Doesn't matter if I'm on Wifi 4g have uninstalled the app reloaded it. Still the same slow connection to airbnb's servers. Love Airbnb. Has literally changed how I live in NYC. The app? I only use it when ABSOLUTELY necessary."
    },
    {
        "id": "68",
        "body": "Awesome"
    },
    {
        "id": "69",
        "body": "Just joined the airbnb community and found app to be very user friendly! Couldn't have been any easier. I know I will be using this quite often from now on when booking travel. It's so much easier for me as well when traveling with my two little ones."
    },
    {
        "id": "70",
        "body": "Facebook login used to work with a single tap now it opens Facebook login prompt where I have to enter my information again. I’ve already entered my Facebook credentials in iOS Settings once. Boo"
    },
    {
        "id": "71",
        "body": "It doesn't fully load listings very irritating please update"
    },
    {
        "id": "72",
        "body": "As a frequent traveller Airbnb is my main form of finding places to stay--from Boston to Barcelona and everywhere in between. The ease and beauty of the app makes it fun to explore find and book places to stay. Then everything I need to know about the space is stored in the app and what's even better--the app makes it incredibly easy to communicate with the host."
    },
    {
        "id": "73",
        "body": "My phone is iPhone 6 and I'm a host. On the upcoming of host home the definition of "
    },
    {
        "id": "74",
        "body": "Simple and intuitive. Love the host messaging feature."
    },
    {
        "id": "75",
        "body": "if it's ur first time using air bnb pls use my referral code it'll save you $25 on your first stay. the code is "
    },
    {
        "id": "76",
        "body": "I found a lot of good hostels! And also they are cheap:)"
    },
    {
        "id": "77",
        "body": "Works great had a great time."
    },
    {
        "id": "78",
        "body": "Truly a great way to communicate with hosts from around the world. Very welcoming community."
    },
    {
        "id": "79",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! Overall you should definitely give it a try especially with the $25 off I gave you!"
    },
    {
        "id": "80",
        "body": "Thank you for making such a great app to manage our listing and travels!!! Great job and with every update it seems to get better."
    },
    {
        "id": "81",
        "body": "Having the app is totally worth it-- much better user experience than the website. I had such a great experience with my first Airbnb trip last month that I just used it for another trip I'm taking in two weeks! The app is very user friendly even for someone who isn't as tech saavy as everyone else. Would recommend it to anyone!"
    },
    {
        "id": "82",
        "body": "For the past 25+ years I've been enduring hotel chains overpriced parking overpriced meals and surly doormen every time I visit home to see Mom or go on vacation. Never again! I was able to find a wide variety of homes condos apartments cabins chalets and even tree houses in this app contact the owners book my stay -- I found a 2 bedroom 2.5 bath condo in ski country for about $800 less for a weeks' stay than a hotel would have been. And this came with digital cable TV wifi parking. AND a gourmet kitchen so I could cook my own meals if I wanted ... During Christmas week. In a ski town. I will never stay in a hotel again."
    },
    {
        "id": "83",
        "body": "Favorite traveling tool - a must have for adventure-seekers!"
    },
    {
        "id": "84",
        "body": "This app is not only a lifesaver but it will allow you to meet new people and have a great time. I have used this in NYC as well as in southern Virginia. This app does all the work for you. It had a beautiful interface that allows it to work seamlessly."
    },
    {
        "id": "85",
        "body": "App functionality has improved greatly with the latest update."
    },
    {
        "id": "86",
        "body": "I've had nothing but great experiences with airbnb and I look forward to all the traveling I will do using airbnb in the future."
    },
    {
        "id": "87",
        "body": "Excellent app! Chat with the host is very useful. However airbnb is charging me in EUR even though my currency set as USD in the settings"
    },
    {
        "id": "88",
        "body": "Great and professional service. You get $25 if you sign up and enter code TTHOMAS177."
    },
    {
        "id": "89",
        "body": "I just finished booking my first trip with this app. iPhone 6+ running 8.1.1 It's beautiful but has major issues. Verifying my identity was a nightmare and I almost canceled the whole thing and booked a hotel then I realized there was a hold on my credit card so pushed through. I had to go through the process to verify 8 times and still don't know why it worked the last time and not the first. When I tried to contact support it just went through the verification process again. Annoying. Once I got the verification done my booking was complete except somehow the app reset the dates! Fortunately I had already contacted the host and she noticed it was off and adjusted it. I'll keep looking for places to stay with the app but likely book on a laptop."
    },
    {
        "id": "90",
        "body": "It seems after the new update almost everytime I open the app I have to go through a couple of crashes until I can use it normally."
    },
    {
        "id": "91",
        "body": "The ability to scroll through fantasy childhood dream destination residences with such ease is absolutely amazing. Using this app I'd be able to plan my night stays for a eurotrip through my smartphone!"
    },
    {
        "id": "92",
        "body": "Without Airbnb I would not have made a grand move across the country from Washington DC to San Diego and now to LA. I am not sure quite where I will end up but it will be near a beach and have palm trees and maybe even some Hollywood stars. That is what I have been doing with the AirBNB service and loving it. I have been staying with many different hosts (as a +1 w/ fiancée before I registered ) who were all fabulous! I've seen most of Los Angeles through this and that makes it so much easier to decide where I want to live ASAP."
    },
    {
        "id": "93",
        "body": "I've always wanted to use airbnb for travel but most of the time I'm a spontaneous traveler. Well I just booked my first place 10000 miles away no less. This is the best service. Beautifully designed and laid out app. Good work guys."
    },
    {
        "id": "94",
        "body": "I do not get this app. As a host it has me running in circles. I cannot find a payout breakdown. The help section refers me to places that aren't in the account menu. When entering text in the text boxes they don't scroll right and are blocked by the keyboard. I have just wasted an hour of my morning trying to get a better understanding of this app and feeling compelled to write this review which I never do. There is no reason it should take me that long to figure out how to use an app. I'm no techno wiz but I'm pretty sure the whole point of apps are to make things easy. These guys are taking a cut from the host side and the guest side you think they would have enough money to make a better app. I'm getting more bookings from their competitor so I'm seriously considering shutting down my listing on this app and not dealing with the headache."
    },
    {
        "id": "95",
        "body": "I've been doing Airbnb for a little while now and it feels so awesome saving the extra $$$ versus a hotel room! Use this promo code for $25 off! JHARTLEY44"
    },
    {
        "id": "96",
        "body": "This company is spending more time making 3D models of listings in their lobby than fixing their software and addressing host issues. Their airbnb open event was totally unorganized and when I tried to communicate with my guest their iOS app doesn't allow me to reply to my guests more than 3 lines and then my words disappear. The old app worked great. It was solid. This new one has caused me to lose money and my ratings have gone down dramatically due to not knowing what's going on with my guests and new inquires that get lost in the cloud. Back to CraigsList..."
    },
    {
        "id": "97",
        "body": "Let me say that i like the concept a lot and the app is smooth and with good user experience but there is one exception: The makers decided that they will bully you out of a photo no matter what - so everywhere you click the first thing you see opening is that annoying dialog asking you to upload a picture. Well guess what: I don't take kindly to apps that use pressure tactics so I am boycotting the use of an otherwise decent app because of the idiotic and manic attempts to force me to upload a photo. One word for you air bnb: OUT! Oh and did I mention that hosts pay 3% and guests pay 12% service fees?!"
    },
    {
        "id": "98",
        "body": "I hope Airbnb develops a separate version for the iPad. One thing I really don't like is that it doesn't reposition when you turn the iPad. Also push notifications don't clear after I open the app and check for messages. You should also be able to update your listing which you can't do. I just find using the browser easier - and I hate every time I view the site in the browser that it asks if I want to open it up in the app. NOOO! I don't!"
    },
    {
        "id": "99",
        "body": "We love the site and I use the web site and app for iPad and iPhone. The choice to get a filter on entire house for example is not available on the app. That would be a plus."
    },
    {
        "id": "100",
        "body": "I've been hosting for about 6 months now and it's been great. No serious issues great people have stayed here and I've made a lot of extra money to help with rent! Highly recommend hosting!"
    },
    {
        "id": "101",
        "body": "Wish it were easier to check payment status etc. on the app!"
    },
    {
        "id": "102",
        "body": "App needs improvement. As someone who's travelling more than hosting having the app open to the hosting mailbox all the time wastes time. Actually this app should be split in two. Probably makes sense and there wouldn't be backlash like swarm or facebook messenger. The app design doesn't follow the website where all messages are in one place or where messages may be archived etc. As a traveller need to be able to copy (and paste) from room directions or house rules -- especially when those directions or house rules are in a different language. Oh and it's impossible to leave app feedback on the airbnb website."
    },
    {
        "id": "103",
        "body": "The location is great and Maria is wonderful. Very helpful. You will have everything you need but the apt is small. The main bedroom is small but small 2-person bed is ok. The sofa bed isn't very comfortable. I think the apt is for two people or three at very most. The only two things you should know are (a) the lift doesn't go to the apt floor you have to walk up last flight of stairs and (b) as it is an attic the ceilings are low. This may be a problem for tall people especially in the shower. I liked it enough to book a second time."
    },
    {
        "id": "104",
        "body": "I had a trip booked and paid for thanksgiving then out of no where they banned my account and now I'm left scrambling to make plans. Incredibly rude and inconvenient. I'll be using another service going forward and will not be recommending them in the future as I have in the past."
    },
    {
        "id": "105",
        "body": "Make a section of canned responses. Tired of typing the same answers to the same questions weekly. Guests don't read the profile. They just ask."
    },
    {
        "id": "106",
        "body": "Can't use it. Otherwise it's good. But useless if you haven't verified your ID already."
    },
    {
        "id": "107",
        "body": "I keep putting in my email to create an account and there's no next button. The only option is to create an account using facebook or google which I do NOT want to do. Using ipad. This app is awful."
    },
    {
        "id": "108",
        "body": "When you download the app go to the main menu then tap on "
    },
    {
        "id": "109",
        "body": "I search through AirBnB frequently even when I'm not planning a trip anywhere! It's fun to view my possibilities and it even inspires me to visit places I've never considered. I've reserved through the app 2x now and hadn't had any issues with the places I've chosen. One trip was to Capitola CA and the other to San Juan Puerto Rico (which I just got back from last night). One thing for sure though; because of past scams I've read about I always do a little extra digging when choosing where I'll stay. Read the host's profile read the reviews done by those who have stayed at the location check the dates of when the host joined write a quick note to the host etc. Do your research basically. PR was spectacular and my hosts pictures didn't do the place justice. I love knowing I can find great steals thru this app and I will continue to use it. Like another reviewer said: why pay for hotel fees (ie. Internet charges hotel resort fees) when you have a host who provides free Wi-Fi. And I don't want the experience of a chain hotel- don't need continental breakfast or beach towels. I had a host who provided beach equipment with the condo. Definitely worth it! I'll be using AirBnB as long as I can. =)"
    },
    {
        "id": "110",
        "body": "I'm new to Airbnb; I'm currently planning a family trip to Europe and am excited to try it. However I just discovered the app is lacking a major bit of info. While the additional cost per person is available on the app nowhere does it say how many people the base price covers After spending lots of time sorting through listings on the app I looked at the website and found that some use 2 or 4 as the base and some use 1! Since we'll be traveling with 6 people that makes an enormous difference in cost. So it's back to the drawing board... Also being able to favorite listings is great but please add in the notes function! And finally please make this a universal app with iPad functionality."
    },
    {
        "id": "111",
        "body": "The app has still room for improvement but at least they fixed the crashing"
    },
    {
        "id": "112",
        "body": "There is an issue where when I type a message to a guest the text box scrolls so that I can't read what I'm typing. It's a really amateur bug that didn't exist in any previous versions of this App. It's gotten to the point where I'd rather just log into Airbnb through Safari than use this App. Airbnb takes a pretty hefty cut from each transaction. At the very least the users should expect better than the current app."
    },
    {
        "id": "113",
        "body": "Airbnb was awesome the host was very knowledgable. The App and company are awesome!"
    },
    {
        "id": "114",
        "body": "A delight to use as a gateway to so many wonderful experiences around the world."
    },
    {
        "id": "115",
        "body": "As an American undergrad studying abroad and visiting different places in weeks off I LOVE AirBnB!!!!! I've only been a guest but the app is easy to use for me and I love the service! I started using AirBnB when abroad and regret not starting earlier! It doesn't give you as many filter features as the website though.... The website lets you do an advanced filter for housing type (like cabin apartment castle house tent... There's a lot). So if I wanna do something more specific I have to use a computer but after favoriting them the app is nice. Good way to stay in contact with your host before and during your visit. That's what I end up using it for mostly."
    },
    {
        "id": "116",
        "body": "Great locations lots of options fabulous hosts easy-to-use program- searches pics details calendars payments etc."
    },
    {
        "id": "117",
        "body": "Very comfortable home. Conveniently located to walk around SMA. Leslie a very helpful owner and easy to communicate with."
    },
    {
        "id": "118",
        "body": "Traveling is so much fun with this Airbnb app."
    },
    {
        "id": "119",
        "body": "The App is not user friendly as a guest or host. It's very convoluted. I don't know why it does not look like more the actual website. They need to do s lot of thinking and rebuild this app from scratch."
    },
    {
        "id": "120",
        "body": "Who needs hotels any more? We have Airbnb :) I feel safe using the service and always have a great experience meeting local folks while traveling all over the world and paying a lot less for spectacular accommodations. Go Airbnb!!"
    },
    {
        "id": "121",
        "body": "I have used this app many times now across US cities and found some real gems to stay in! I use this on spontaneous road trips as well as planned trips. Quality homes and great people."
    },
    {
        "id": "122",
        "body": "Airbnb makes traveling destinations feel like home. Love it"
    },
    {
        "id": "123",
        "body": "The app works fine on my phone but on my ipad it will only allow the "
    },
    {
        "id": "124",
        "body": "Makes hosting with airbnb a snap!"
    },
    {
        "id": "125",
        "body": "Very sneaky airbnb: you release a dead-on-arrival update on 11/8/14 and after countless user complaints you finally fix the issue with a quietly updated version two days later but completely fail to mention / acknowledge the fix in your update logs on the App Store. Between the glitchy software and the horrendous customer service (I'm both a host And a guest in the airbnb marketplace) I'm seriously ready for airbnb to be acquired by a larger more reliable company. It's a pity: airbnb started as a fantastic experiment in the "
    },
    {
        "id": "126",
        "body": "Thank you for fixing the bugs. This is my most used app and I don't know what I'd do without it."
    },
    {
        "id": "127",
        "body": "I much prefer the old iPhone app. This one isn't as flexible as the old. To update your calendar you have to click on a date un-click and then press save. Annoying! The two separate inboxes is annoying too. I want to click in one box and have everything right there. Basic simple and to the point. Too much fancy scrolling and this and that. Why?? Makes me not want to use it all together. Also I don't like changes they made with the website. The searching for listings has become annoying. It seems much harder to find what I need. Change it back please!! Update..app crashes every other day and I have to uninstall it and reinstall to get it working. Annoying!"
    },
    {
        "id": "128",
        "body": "Works perfectly"
    },
    {
        "id": "129",
        "body": "Mark's house has a splendid overlook of Lake Tahoe. This is our second time to stay; so we knew we did not need to pack wine glasses or cutlery. He has a well stocked house ready to walk into and begin relaxing. Honestly with the lake view we had to nudge ourselves out the door to the excellent meadow hike provided in a handy binder. I also left a coat behind and he promptly emailed and asked if he could mail it to me before I even realized I forgot it!"
    },
    {
        "id": "130",
        "body": "Airbnb is my favorite way to travel the world and share our home & neighborhood with others. This is one of my essential apps. It makes it easy to be a guest and host! If there's ever an issue it's resolved quickly! ;)"
    },
    {
        "id": "131",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!"
    },
    {
        "id": "132",
        "body": "The flat was exactly as promised. Modern simple and in a great location. The only things we wished for was a bottle opener and a map. But we made do!"
    },
    {
        "id": "133",
        "body": "Wonderful way to monetize your home while you are away as well as for cool places to stay while traveling."
    },
    {
        "id": "134",
        "body": "I love you guys. Please fix this so I can continue to do so."
    },
    {
        "id": "135",
        "body": "Using this app has always been a torture but it now became worse. Time lag with displaying messages pictures and info of the guest does not load in heads cut from the pictures so all I see is a shirt and cannot even tell him to upload a proper picture because he did except the stupid app crops it etc. I wrote a number of emails to airbnb about these issues but they do not bother to respond or to implement change. But this latest version of this magnificent app tops everything: it crashes after a few seconds and cannot open again!! I reinstalled which made it work for a minute but it keeps crashing on me again. Have you guys even tested it before making public? Why oh why??"
    },
    {
        "id": "136",
        "body": "I wasn't a huge fan of the update in the first place. Yes it's pretty. But it isn't the easiest to navigate when it comes to responding and sending messages. Now it is crashing all the time!!! I have deleted it and re downloaded it now about three times in order to make sure my guest can check in properly. What a waste of time!!!! Also as someone else mentioned in an earlier review. When typing the content scrolls all the way down making it tedious to send a message. Please fix this app. I use it everyday."
    },
    {
        "id": "137",
        "body": "I have re-installed the app 4x to get it to work each time it works right after install but then needs to be deleted again. Love being an Airbnb host however this update makes it difficult to do my work."
    },
    {
        "id": "138",
        "body": "We had a great time at the Glad House celebrating my husband's 80th birthday with our two children and 6 grandchildren and new great granddaughter"
    },
    {
        "id": "139",
        "body": "The app crashes every time since the update. Please fix this problem I need to be able to respond quickly."
    },
    {
        "id": "140",
        "body": "This app crashes as soon as you open it. Unusable."
    },
    {
        "id": "141",
        "body": "App doesn't work."
    },
    {
        "id": "142",
        "body": "The app used to work great but with the latest update it will no longer open. I tried reinstalling it but this did not resolve the problem."
    },
    {
        "id": "143",
        "body": "Crashes every time I try to open the app. Unusable."
    },
    {
        "id": "144",
        "body": "Constant bugs on both the app and the site. Ridiculous."
    },
    {
        "id": "145",
        "body": "I host two airbnb properties and use my app to communicate with guests multiple times per day. With this new update it keeps crashing when I try to open it and it is affecting my business. I am frustrated and disappointed."
    },
    {
        "id": "146",
        "body": "I am both an airbnb host and guest and find this app to be great on both fronts! I can easily update our home's calendar search for places for our next vacation and exchange messages both ways! Great UI"
    },
    {
        "id": "147",
        "body": "It crashes every time I open the app. Only work around is to uninstall then reinstall."
    },
    {
        "id": "148",
        "body": "AirBNB has been an amazing and safe way to travel and meet new people. Period!"
    },
    {
        "id": "149",
        "body": "Airbnb really needs to take hard look at developers. Company with that scale just can't allow mistakes like happened with previous update. Two stars for now at least they got it running again. I'm 4th year host"
    },
    {
        "id": "150",
        "body": "Have been using the app daily since August. The update has caused it to crash - I've reinstalled 3x now - works for a couple hours then crashes again. PLEASE FIX."
    },
    {
        "id": "151",
        "body": "Cannot turn on app - it crashes right away"
    },
    {
        "id": "152",
        "body": "11/10: So far it's still up but I have 144 unread group notifications that I cannot clear."
    },
    {
        "id": "153",
        "body": "It won't open!! I have reinstalled it numerous times! Please fix this is affecting my customer response time!"
    },
    {
        "id": "154",
        "body": "The app won't even open. Please fix. I rely on this app to keep in touch with guests and to respond to inquiries quickly. Update: another user suggested uninstalling and reinstalling. I've done this 4 times now. It will work once but as soon as you close the app and try to open it again crash city!"
    },
    {
        "id": "155",
        "body": "This is one of my favorite apps for obvious reasons and the addition of Apple pay makes it that much cooler. This is a must have app!"
    },
    {
        "id": "156",
        "body": "Unusable. Crashes immediately upon launch. Restated phone. Deleted and reloaded app. Restarted phone again. All to no avail. App doesn't work. Please fix!!!"
    },
    {
        "id": "157",
        "body": "It crashes immediately. No joy!! :("
    },
    {
        "id": "158",
        "body": "I too had issues with the most recent update (v4.5 from Nov 8). The app would crash immediately when I tried to open it. Restarting my phone did not help. Seems like a lot of other users are experiencing the same thing. This was resolved when I deleted the app entirely then re-installed."
    },
    {
        "id": "159",
        "body": "I can't access the app at all after the update on Nov 8. Frustrated!"
    },
    {
        "id": "160",
        "body": "My phone is iPhone 6 and I can't open the app."
    },
    {
        "id": "161",
        "body": "Cannot open the app as it crashes before opening every time now."
    },
    {
        "id": "162",
        "body": "Just uninstall the app and reinstall it. It worked for me on iPhone 6 plus."
    },
    {
        "id": "163",
        "body": "Can't even open the app"
    },
    {
        "id": "164",
        "body": "How can a reputable company release an update in this way without properly testing it?? The app is bow completely useless. It crashes immediately upon launch. It was a good app before with only a couple of features missing. Full review after fix."
    },
    {
        "id": "165",
        "body": "As soon as I open the app it immediately closes on its own."
    },
    {
        "id": "166",
        "body": "With the new update the app no longer opens on my iphone 5. With future trips coming and as a host myself this is a headache."
    },
    {
        "id": "167",
        "body": "Fix ASAP. The app is crucial to managing my various listings."
    },
    {
        "id": "168",
        "body": "Fix this AirBnb. I rely on your app to manage my property. This is totally unacceptable."
    },
    {
        "id": "169",
        "body": "Version 5.0.0 doesn't open just crashes"
    },
    {
        "id": "170",
        "body": "Won't open. Completely crashes."
    },
    {
        "id": "171",
        "body": "Do not update!!! This version is completely useless!!!"
    },
    {
        "id": "172",
        "body": "I'm iphone 6+ user and It doesnt work at all. Dont update this version!!!!! This is the worst update ive ever seen"
    },
    {
        "id": "173",
        "body": "There is something that makes the app crash upon opening it on my iPhone6 I just did the update and that major issue started I CAN'T use the app because of the update I did the update makes my AIRBNB APP CRASH IMMEDIATELY AFTER TRYING TO OPEN. DO NOT download this update until our friends at Airbnb fix this issue as it will affect your ability to response and may hurt your response rate. Help please!!!"
    },
    {
        "id": "174",
        "body": "Had to reinstall twice today!!"
    },
    {
        "id": "175",
        "body": "Please fix app now! New version crashes on start. I'm a host and now am unable to receive requests on the go. Why do programmers always do this? Update the app to make it better but instead really screw it up so you can't even open it anymore?"
    },
    {
        "id": "176",
        "body": "After updating the app it crashes every time. Restarted the phone turned it off but nothing helps"
    },
    {
        "id": "177",
        "body": "App dosen't work anymore on iphone 5s 8.1.1... Only crashes"
    },
    {
        "id": "178",
        "body": "The app will now NOT open just CRASHES"
    },
    {
        "id": "179",
        "body": "New version of app crashes((( cant use the app. Please fix it"
    },
    {
        "id": "180",
        "body": "New update is awful as every time one tries to open the app it crashes ........not good! Please fix ASAP"
    },
    {
        "id": "181",
        "body": "This version of the app crashes on opening. I can open it a couple times after downloading and redownloading but then it suddenly starts crashing. I also have problems replying to questions about my listings as the text that I type constantly scrolls to the top as I type."
    },
    {
        "id": "182",
        "body": "everyone need this app"
    },
    {
        "id": "183",
        "body": "You app crashes and I am unable to even open the app before it crashes."
    },
    {
        "id": "184",
        "body": "App DOES NOT OPEN!"
    },
    {
        "id": "185",
        "body": "Please repair! Will not start crashes also as it opens!"
    },
    {
        "id": "186",
        "body": "My wife and I just started using this incredible app. We had an excellent experience in Chicago Philadelphia and New Jersey."
    },
    {
        "id": "187",
        "body": "Latest update won't open app at all! It just crashes! Please fix asap!"
    },
    {
        "id": "188",
        "body": "Horrible update! Keeps crashing every time I try to open the app!!!"
    },
    {
        "id": "189",
        "body": "The app has always been prone to crashes and now it won't open at all so don't bother."
    },
    {
        "id": "190",
        "body": "Crap"
    },
    {
        "id": "191",
        "body": "Don't update to the latest version as it will always crash."
    },
    {
        "id": "192",
        "body": "App crashes on every startup."
    },
    {
        "id": "193",
        "body": "You guys released an app that doesn't work at all. On launch the app crashes. Every. Single. Time. And reading the reviews it seems like I'm definitely not the only one experiencing this issue. I've never seen such disregard for bug testing/quality control. This app deserves a big fat ZERO too bad that 1 is the lowest."
    },
    {
        "id": "194",
        "body": "This update does not work at all. I've been a user for years and am a fan of airbnb but this update does not even open. Please keep it simple and useful!"
    },
    {
        "id": "195",
        "body": "Oh please fix this...this app is so needed and a really good add-on to the airbnb website. Other than the crash the app is great."
    },
    {
        "id": "196",
        "body": "Kinda problematic."
    },
    {
        "id": "197",
        "body": "Just updated it on my iPhone 5 and the app crashes Everytime I try to open it. The app sucked before that but not it truly is unusable. Please fix this. It will only benefit both of us!"
    },
    {
        "id": "198",
        "body": "It crashes all the time. Iphone 6plus"
    },
    {
        "id": "199",
        "body": "After this latest update the app will no longer open on my iPhone 4s"
    },
    {
        "id": "200",
        "body": "Impossible to use! Needs pulled from App Store and fix asap!"
    },
    {
        "id": "201",
        "body": "Update crashes the App once you click on it to open it."
    },
    {
        "id": "202",
        "body": "This update crashes every time I try to open it. Don't update because it's broken."
    },
    {
        "id": "203",
        "body": "Crashes every time."
    },
    {
        "id": "204",
        "body": "It crashes every time I try to open it! Please fix this asap!!"
    },
    {
        "id": "205",
        "body": "I have the same problem app is crashing on launch and it is completely unusable at this point"
    },
    {
        "id": "206",
        "body": "The price filter for monthly rentals no longer exists in the app. I have contacted customer support and they are no help."
    },
    {
        "id": "207",
        "body": "Fix this immediately please. Causing real problems."
    },
    {
        "id": "208",
        "body": "Since the Nov. 8 update this app won't open despite restarting the phone. We need a fix pronto."
    },
    {
        "id": "209",
        "body": "I'm sure they're working on this. It's impossible to open the app after they recently updated it"
    },
    {
        "id": "210",
        "body": "The recent update is unusable. The app crashes upon launch. Uninstalling and reinstalling does not help nor does a hard reset. Please fix the bugs so I can continue to use the app as a host."
    },
    {
        "id": "211",
        "body": "Just adorable. Equipped with everything you need for a pleasant weekend retreat. Out only complaint is the wireless network is spotty and sometimes frustrating but this place is great otherwise. Close to everything"
    },
    {
        "id": "212",
        "body": "Same as everyone else here. If you close the app after installing it and logging in for the first time when you try opening the app again it will crash instantly."
    },
    {
        "id": "213",
        "body": "Please fix ASAP"
    },
    {
        "id": "214",
        "body": "Can't use app anymore. Please fix"
    },
    {
        "id": "215",
        "body": "GUYS YOU GOTTA FIX THIS. I love airbnb and this app is normally a lifesaver as a host but after upgrading to iOS8 on my iPhone 5 and updating this app it crashes 100% of the time upon launch. Megasadface. I'll update this review as soon as it's fixed. Please make it soon! :)"
    },
    {
        "id": "216",
        "body": "Crashes every time I open it! I just closed all my apps restarted the phone and it's still happening on iPhone 6. We need the old one back this app is critical to my business."
    },
    {
        "id": "217",
        "body": "Crashes."
    },
    {
        "id": "218",
        "body": "App won't even launch now. How are we supposed to manage our listings! Argh!"
    },
    {
        "id": "219",
        "body": "I have an iPhone 5. After your recent update this app is not working. I try to open it and it shuts down immediately. I rely on this app daily. Please help fix it quickly."
    },
    {
        "id": "220",
        "body": "Newest update makes the app non responsive. Now I have to use the horrible web version. Also please make an iPad already!! This is horrible when you are hosting and customers await your response"
    },
    {
        "id": "221",
        "body": "The newest update of the Airbnb crashes each time I attempt to launch it on my iPhone 5S (version just before the 6). I have guest at my ace now and am worried about how this will affect my ability to mange my rental transactions. Please fix it as soon as possible."
    },
    {
        "id": "222",
        "body": "Same issue as the others since last update please please please fix immediately as am traveling and NEED it."
    },
    {
        "id": "223",
        "body": "I was using app frequently but new update crashes. Hoping bug is fixed soon."
    },
    {
        "id": "224",
        "body": "Like all of you my app stopped working today. Here is how I have gotten around it. 1- delete the app 2-reopen app 3- keep it running in background. It only crashes if you close it out completely. I'm sure they are working on this software bug. Regardless it is really frustrating when you are a host and have bookings."
    },
    {
        "id": "225",
        "body": "Wait to update if you rely on this app"
    },
    {
        "id": "226",
        "body": "App crashes and can not open it."
    },
    {
        "id": "227",
        "body": "I am completely unable to open this app without it crashing."
    },
    {
        "id": "228",
        "body": "Whatever they did with the update undo it. It's horrible!! Their app designers should be fired. People are traveling all around the world and they use their phone to access places and airbnb does this? Unconscionable."
    },
    {
        "id": "229",
        "body": "Its a great app its an awesome platform. Please just fix the crashing bug..."
    },
    {
        "id": "230",
        "body": "A seriously solid app. Great all around!"
    },
    {
        "id": "231",
        "body": "Please fix this ASAP!"
    },
    {
        "id": "232",
        "body": "The last update cause crash everytime the app launches"
    },
    {
        "id": "233",
        "body": "Unacceptable to have such a faulty update."
    },
    {
        "id": "234",
        "body": "Ahh! This is terrible. Airbnb needs a bug fix pronto! I use this app everyday to manage everything as a host and this is awful. The update came with a bug. I'm on an iPhone 6 and now as soon as I launch the app it crashes immediately. Airbnb please fix this! Also there is no easy place in your website to report these bugs. At least on the mobile site. That's why I'm writing this here."
    },
    {
        "id": "235",
        "body": "I used this app daily and now it won't even open!"
    },
    {
        "id": "236",
        "body": "The app is 100% unusable after the most recent update. Beware!!"
    },
    {
        "id": "237",
        "body": "Every time I try opening the app it crashes and closes immediately rendering the app unusable.. When I first started using the app it worked fine but then when I started to get guess and use more frequently it stopped working.."
    },
    {
        "id": "238",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival if you find a place that offers instant booking. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!"
    },
    {
        "id": "239",
        "body": "Since the latest update it won't open on my iphone 6plus. Had been working fine."
    },
    {
        "id": "240",
        "body": "Updated to this latest version and cannot even open it. Crash crash crash!!!! I love this app...I am a host and love using it for my own travels. Please make it WORK"
    },
    {
        "id": "241",
        "body": "App will no longer open without crashing. Also when editing listings descriptions it frequently moves information from one area to another and deletes sections etc. Must do all editing on computer to avoid mistakes. Please fix the app! We all need it!"
    },
    {
        "id": "242",
        "body": "Crashed"
    },
    {
        "id": "243",
        "body": "Who runs your QA? It crashes on every device everytime. Need to reinstall to use everytime. Fix it"
    },
    {
        "id": "244",
        "body": "Airbnb has to get their act together. It's unacceptable an app that people rely on to be in touch with possible clients crashes and still after 24 there isn't a fix after 24hrs."
    },
    {
        "id": "245",
        "body": "Please fix the app it is horrible!"
    },
    {
        "id": "246",
        "body": "For those of you that are experiencing crashes just simply reinstall the app. It fixed the problem for me."
    },
    {
        "id": "247",
        "body": "This app is now worse than your customer service response times. Didn't think that was possible."
    },
    {
        "id": "248",
        "body": "Just downloaded the latest update and it won't open...just shows a white screen and crashes"
    },
    {
        "id": "249",
        "body": "This new update crashes immediately when I try to open with my iPhone5. Totally unusable! I wish I had read review before downloading it!! :("
    },
    {
        "id": "250",
        "body": "Only crash!"
    },
    {
        "id": "251",
        "body": "Delete app and Re-download to fix crash. Worked for me. Thank you Airbnb"
    },
    {
        "id": "252",
        "body": "Today's update crashes. Can't launch the app."
    },
    {
        "id": "253",
        "body": "Why release an update that doesn't work? This is a nightmare. I can't conduct my business and that's a loss for both me and airbnb. I hope this gets fixed soon. At least release the previous version as the update to this mess until it's corrected. F-"
    },
    {
        "id": "254",
        "body": "Immediately crashes on iPhone 5 after the update.... Please fix!!"
    },
    {
        "id": "255",
        "body": "Same as the previous reviewer I updated the new version of this app today and then it crashes immediately every time I open it. I use an iphone5s. Please fix this!"
    },
    {
        "id": "256",
        "body": "Crashes everytime when opening the app please fix!!!"
    },
    {
        "id": "257",
        "body": "App push update today crashes immediately after attempting to launch. We have 3 properties on Airbnb and depend heavily on the mobile app to respond to guests wherever we are. Please fix this ASAP!"
    },
    {
        "id": "258",
        "body": "Please fix"
    },
    {
        "id": "259",
        "body": "What's up guys 5 star rated app is just crashing after 8th nov update.. I have iphone 5.. Having a lot of difficulties to deal with guest all over the day.. I know you guys are great while developing app But I think last minute testing team efforts failed.. :) All the best"
    },
    {
        "id": "260",
        "body": "Cannot open the app after the latest update - crashes immediately. Please fix I have people pending!"
    },
    {
        "id": "261",
        "body": "I use the app everyday on my iPhone 6 plus and EVERY time I use it I experience a bug. The messages don't display properly the app crashes before it opens the screens flash while loading in a way that makes it look like a beginner developer created without testing it. I love airbnb but I hate this app it's not reliable you will experience frustration while using it. Where is the quality assurance?"
    },
    {
        "id": "262",
        "body": "New version is crashing excessively."
    },
    {
        "id": "263",
        "body": "Most recent update makes it so you can even view the app anymore. Won't even load. Do not update to new version."
    },
    {
        "id": "264",
        "body": "Recent update is crashing. Really wished this synched with my calendar."
    },
    {
        "id": "265",
        "body": "I can't support my guests due to your app crashing. I'd hope your test this app before releasing a dud. Can't use it at all."
    },
    {
        "id": "266",
        "body": "While I love that Airbnb aims to be progressive they need to keep the progressive attitude to their business model not their app or booking rules. The current release crashes upon opening and I'm currently out a computer. So I'm now very limited as a host and am crossing my fingers that nothing urgent comes up that requires my attention. I also really don't appreciate their continuous "
    },
    {
        "id": "267",
        "body": "Can't even open the app. Tried restarting and re installing completely unusable shame this app wasn't tested properly before launching it"
    },
    {
        "id": "268",
        "body": "Stability issues. You are better off not updating to this version."
    },
    {
        "id": "269",
        "body": "No good on 6 plus."
    },
    {
        "id": "271",
        "body": "I wish I could make an observation but it crashes every time."
    },
    {
        "id": "272",
        "body": "Please fix as soon as possible!"
    },
    {
        "id": "273",
        "body": "App won't even open in iOS 7"
    },
    {
        "id": "274",
        "body": "Hi i'm a very active user and i'm suppose to receive a couple of people this weekend and with the nov. 8 update the app is completely unusable on my iphone 6 i just tap it and it tries to open and immediately crashes rending it unusable. I highly love this app and use it on a daily basis please fix this asap. Thank you."
    },
    {
        "id": "275",
        "body": "This updated crashes every time on startup ios8 iPhone 5s."
    },
    {
        "id": "276",
        "body": "New version of app crashes on every launch. Restart and hard reset does not help. As a host this is a disaster. When fixed i'll update to a complete review. (Amazed how many reviews for the app are specific reviews of stays at peoples homes are people really that dumb?!)"
    },
    {
        "id": "277",
        "body": "Can't open the app. It shuts down every time I click on it."
    },
    {
        "id": "278",
        "body": "Crashes on startup :("
    },
    {
        "id": "279",
        "body": "on iPhone 6 iOS 8.1"
    },
    {
        "id": "280",
        "body": "I can no longer get into the app it quits immediately."
    },
    {
        "id": "281",
        "body": "Please fix the defect with Nov 8 app upgrade on iOS 8.1."
    },
    {
        "id": "282",
        "body": "As usual AirBnB delights with its app. Great little app. Can't wait to have search capability by neighborhoods....in shanghai. William"
    },
    {
        "id": "283",
        "body": "Best in this category"
    },
    {
        "id": "284",
        "body": "Works great for managing listings messaging reviews but I have over 100 group message notifications I cannot clear. Thankfully they added an option to no longer receive group notifications on the app (no more sound/vibe thank sweet jesus) but I still see the count in the bubble. Would love a "
    },
    {
        "id": "285",
        "body": "++++++. The best"
    },
    {
        "id": "286",
        "body": "I NEVER write reviews—WAY TOO busy. But the new app is SO PAINFUL to use I am MAKING the time! Airbnb’s app used to be pretty cool was easy to manage my listings and effortless at seeing who was coming and going. In their effort to update it and give it a fresh look they’ve messed with the functionality that used to make it so easy to use. The new app is U B E R S L O W to even open and t h e n i t i s e v e n S L O W E R T O R E S P O N D …. GGRRRRRRR—IT’S SOOOO FRIKKIN’ FRUSTRATING. There’s SEVERE TIME LAG when opening the inbox and THEN having to wait and wait and wait while the message appears that I’ve already been notified about SEVERAL minutes prior! This app also wanders all over the screen so you find yourself typing below the fold--and on typing the first letter it scrolls back on its own when you move the screen so you can see what you are typing. The new app reverted several of my changes to pre-release information. It also appears to NOT SYNC with the information on the full website. For example in preview mode the pics are totally off and the descriptions do not coincide with the pics. I have no way of viewing what the guest is seeing so how do I know if this screwup only happens in preview mode? Or if it’s what the traveler actually sees when looking at my listing? (Making it EMBARRASSING to EVERYONE if it is!) It’s a real pain to use. When I called customer service to alert them to the issue so they could research and correct it and waited 30 minutes to be connected I found myself talking (again) with another know-it-all who was NOT paying attention and had SHOCKINGLY DEFICIENT listening skills. I had to REPEAT myself MANY TIMES (your name begins ’S’ like Sierra? I’ll repeat for the second time “It’s ‘F’ like FOXTROT!” … HOW CAN YOU SCREW THAT UP??!!). I’m giving up on calling Airbnb and seriously considering listing with other providers."
    },
    {
        "id": "287",
        "body": "Air bnb has paid our rent 2 out of the last 3 months! We love working with Airbnb. It is simple money and we meet cool people."
    },
    {
        "id": "288",
        "body": "My neighbors rent out their place all the time. I didn’t buy a house next to a HOTEL or so I thought. Screw Airbnb. Loud parties. Obnoxious guests. Not enough parking."
    },
    {
        "id": "289",
        "body": "AirBNB is the safe affordable way to travel! The app is amazing so easy to use and it has everything!"
    },
    {
        "id": "290",
        "body": "This app is very useful in managing our guest bookings on the go. It's enabled me to respond almost instantaneously to guest inquiries update our listings and lots more. I highly recommend it especially if you're not likely to be sitting around staring at a computer all day!"
    },
    {
        "id": "291",
        "body": "Too difficult to share wish lists (only gives a choice of about 5 of my contacts with no way to add more or send the list); makes coordinating plans very difficult"
    },
    {
        "id": "292",
        "body": "I love AirBnb as a concept however I am reviewing the actual app which has a lot of bugs and freezes. The notification widget doesn't work and typing messages is kind of a disaster as the cursor doesn't move as you type so you aren't always able to see what you are typing. That being said AirBnb as a concept is easily 5 stars. The application itself just needs to catch up and have the kinks worked out."
    },
    {
        "id": "293",
        "body": "The app has lots of bugs. The most consistently annoying as a host is not having horizontal view while messaging but mostly not being able to see the message as you type. I almost always am not able to promptly message guests until I reach a computer. PLEASE FIX"
    },
    {
        "id": "294",
        "body": "Easy to use haven't encountered a bug or crash yet."
    },
    {
        "id": "295",
        "body": "The desktop version is amazing but they need to invest in fixing the defects and bug crashes closing the app all the time . It's been fixed many times with each update but the same issues are always occurring"
    },
    {
        "id": "296",
        "body": "Overall I really like AirBnB. This app needs some work. I get push notifications and texts instantly but the app itself is slow to refresh or register a new inquiry. It takes several minutes to load any new data. Previous versions made it very difficult for hosts to tell the difference between a question from a guest and a hard inquiry but this problem has since been resolved."
    },
    {
        "id": "297",
        "body": "Compared to the site the AirBNB app is streamlined and quick to use. I found it helpful when ubering somewhere -- I could call up the app and find my address back home instantly."
    },
    {
        "id": "298",
        "body": "So frustrating to use this app! The photos only sometimes load!!!"
    },
    {
        "id": "299",
        "body": "I've noticed the same problem as other users with the cursor jumping around when responding within the app. Also when new messages come in I may receive a banner on my phone but the message won't appear within the app. Lastly references haven't been showing up on the app and I have to access a laptop to review new references. I don't accept guests without a reference and the lag time in not being able to see a reference when it is posted (on the app) has lost me a few bookings."
    },
    {
        "id": "300",
        "body": "My partner and I use this app whenever we travel. Sometimes we don't know how far we're going to drive so we have even booked a few hours in advance and had lots of great choices. Never had a bad experience with hosts or properties either! So much better than hotels and cheaper too!"
    },
    {
        "id": "301",
        "body": "Airbnb helps me survive - this is why I love it and this is the end of my review :-)"
    },
    {
        "id": "302",
        "body": "For some reason they took away the price filter for monthly rentals. Makes no sense."
    },
    {
        "id": "303",
        "body": "Our stay with Veronique was charming in every way. The picturesque neighborhood had many interesting shops within walking distance as well as a lovely park and a delightful walk to Old Montreal. Veronique and her son were easy to enjoy and the cottage was cheery and comfortable."
    },
    {
        "id": "304",
        "body": "As long as your a smart person with a positive open mind. This is the greatest thing and app for any travelers. If you travel a lot airbnb is the way to go"
    },
    {
        "id": "305",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos. Airbnb is also a great way to introduce bedbugs into your home or take them home with you after a stay. Bedbug removal is not covered under the 1000000 USD 'host guarantee'."
    },
    {
        "id": "306",
        "body": "I have trouble with Airbnb App for iPhone it has a bug and it never got fixed when I answer a enquiry using my iPhone I can not see what I am typing when the massage gets too long any more It shows the first words that I typed and everytime I need to drag the screen down to see what I have typed as soon as I start typing the screen goes up again and I cant see any new words that I am typing anymore I have to scroll down every time. it gets very annoying specially when I use it everyday to answer enquiries. Please fix it otherwise it is a 5 star app."
    },
    {
        "id": "307",
        "body": "Terrific time in Paris. The place was central and easy to get to."
    },
    {
        "id": "308",
        "body": "I enjoy using the app on a day to the basis. It is easy to manage most everything with the app. Occasionally I need to go on line for something more complicated like changing a special offer. But for the most part the app works great."
    },
    {
        "id": "309",
        "body": "This app has revolutionized my travel experience. No longer do I have to worry about paying for overpriced hotels abroad that are not as nice as advertised. The design of this app and service is superb it gives you everything you need to make a confident decision. From photos to maps to reviews to a text message interface to chat with the renter. Excellent."
    },
    {
        "id": "310",
        "body": "For a mobile app you can do a lot! It is a well designed application! It is essential for all mobile phone owners."
    },
    {
        "id": "311",
        "body": "Used this for the first time and had a great experience. I really dont think ill stay in a hotel again. This will be my go to whener i travel from now on."
    },
    {
        "id": "312",
        "body": "The features on the app are good but the app is very buggy and makes it hard to use sometimes. It is extremely annoying to be prompted to include your profile picture whenever you navigate to a new page. Also the message area will flicker on every character you type when your message goes beyond the initial text box size."
    },
    {
        "id": "313",
        "body": "Who came up with this logo? Did not a single person object to this?"
    },
    {
        "id": "314",
        "body": "Airbnb is so well arranged I have hosted now 8 guests who have all been unique and great to host. Airbnb has professional photographed my home and my brothers Geodesic Dome in Hillsborough NC. They also provide insurance for hosts and Free smoke Alarms! Genius! I am in Africa right now posting this review while my house is being filled with lovely guests! Isn't technology snazzy? Love love; AIRBNB."
    },
    {
        "id": "315",
        "body": "‼️ Warning advice‼️ By entering the code - 91a454 at $25 can be used in any order"
    },
    {
        "id": "316",
        "body": "This app works well but when you type a message it constantly scrolls you back to the top so you cannot see what you are typing. I would have reported this directly to Airbnb but there is NO place in the app or the website to report bugs. Great customer service.:-("
    },
    {
        "id": "317",
        "body": "Best ever"
    },
    {
        "id": "318",
        "body": "Only thing I would add: explicit explanation of the quote as "
    },
    {
        "id": "319",
        "body": "BEWARE. App is buggy will not complete verification (had to do it in Safari) and can take money from your credit card without authorisation and confirmation. I was charged twice for a booking and Airbnb did not want to refund my money."
    },
    {
        "id": "320",
        "body": "Very easy to used!! Searching and booking is very easy!"
    },
    {
        "id": "321",
        "body": "Easy to use and find best housegood app!"
    },
    {
        "id": "322",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival if you find a place that offers instant booking. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!!"
    },
    {
        "id": "323",
        "body": "The airbnb app is easy to use and give me all the essential controls for booking guests at my airbnb. A couple of drawbacks include note being able to see the original size of guests' profile photo and a bug where I'm not able to see what I'm typing when sending a message because the cursor jumps around the entry. 4 solid stars all around. Fix those bugs and this would be a 5 star experience."
    },
    {
        "id": "324",
        "body": "I hadn't book any house yet but at least I found great locations for my vacation and I definitely will use this app to garaunt my stay. for now I give you 5 stars thanx for service and app!"
    },
    {
        "id": "325",
        "body": "This app is easy to use. I love the clean simple design. Bullets you through the things that you need. Highly recommend it!"
    },
    {
        "id": "326",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival if you find a place that offers instant booking. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!"
    },
    {
        "id": "327",
        "body": "Very good"
    },
    {
        "id": "328",
        "body": "‼️Warning advice‼️ By entering the code - 91a454 at $25 can be used in any order"
    },
    {
        "id": "329",
        "body": "I was trying to sign up and confirm my identity by taking a picture of my ID and book a place for a weekend. The app kept confirming that the process was complete then stalling then asking for me to confirm my identity once again. I lost track of how many times this happened after 5 runs and ultimately I decided to book a hotel instead."
    },
    {
        "id": "330",
        "body": "Love the app and the idea. I was just burned by a cancellation policy of 5 days before reservation. The policies can be ambiguous and strict and a bummer if sitters fall through. For me no refunds on my booking cancelled <20 hours after making it and 1 hour too late to make the 5 day cutoff."
    },
    {
        "id": "331",
        "body": "From a designers point of view... Great job airbnb. Keep it up!"
    },
    {
        "id": "332",
        "body": "I already love the airbnb service but this app makes it even more lovable. The app is intuitive convenient and has everything a traveler will need while on the road. The airbnb team makes it easy to search for a new location track your booking status and communicate with the host via text messages directly all on the mobile phone. Navigation is straight forward user interface is simple and easy to understand. Great app."
    },
    {
        "id": "333",
        "body": "The app functions well. The service is unmatched. Come check us out in Salt Lake City! airbnb.com/listings/2465888"
    },
    {
        "id": "334",
        "body": "I wish I would have known sooner about this app. sooner! I absolutely love how easy it is to use and find affordable places to stay almost anywhere in the planet! So much better than any hotel could offer! Anytime I will need a hotel...I will use Airbnb!"
    },
    {
        "id": "335",
        "body": "... Needs the "
    },
    {
        "id": "336",
        "body": "Without Airbnb I would not have made a grand move across the country from Washington DC to San Diego and now to LA. I am not sure quite where I will end up but it will be near a beach and have palm trees and maybe even some Hollywood stars. That is what I have been doing with this. I have been staying at many different locations without any worry. I've seen most of Los Angeles through this and that makes it so much easier to choose where I want to live."
    },
    {
        "id": "337",
        "body": "The previous one was terrible this is better but needs to improve hope they work on it soon"
    },
    {
        "id": "338",
        "body": "This is a great app ! If you dream of travel if you do travel this is the best way to go and live like the natives do. We have used this in the US with great success ! We will be traveling to France and have booked 4 different places in 4 different cities. All of the host were very quick and helpful to accept. I read through many reviews to get just the right place and hosts. I also just love to dream of the different places to travel. I like that you can rate the host and they can rate you. I like that there is a verifying system so you know if the person is real if they're not verified I am not interested in staying with them. I was told about airbnb by a friend who travel everywhere for NASA and this is how she likes to travel when she goes. Love this app!"
    },
    {
        "id": "339",
        "body": "So useful"
    },
    {
        "id": "340",
        "body": "Highly recommend you stay with Colleen. Best experience. Truly a home away from home."
    },
    {
        "id": "341",
        "body": "I tried this app for the first time on my visit to Stockholm. Great apartment with a beautiful view and a friendly host. I will use Airbnb again."
    },
    {
        "id": "342",
        "body": "Can do with a little improving but nothing can beat this"
    },
    {
        "id": "343",
        "body": "Use this coupon code for $25 off your booking: bhulbert3. It works for anyone. Love this app and company."
    },
    {
        "id": "344",
        "body": "I use air b&b every time I travel! Best and most effective app!"
    },
    {
        "id": "345",
        "body": "I book all my travel with this app. And accept people when they stay with us. So easy to use. Love being able to use Airbnb on the go."
    },
    {
        "id": "346",
        "body": "So easy to use So clear Great customer service Safety Save me a lot of money"
    },
    {
        "id": "347",
        "body": "I have an iPhone 6 and every time I try to click on the map it freezes. It also just randomly crashes from time to time."
    },
    {
        "id": "348",
        "body": "We use the app to research our options for upcoming trips. This works pretty good with the filters and viewing the photos. We usually book using a PC. We have had no trouble with short emails verifying information. The app seems to be very responsive."
    },
    {
        "id": "349",
        "body": "So glad I found airbnb. I came to New Orleans to visit my boyfriend and already spent a fortune on airfare so it was so nice to save some money with airbnb instead of hotels. The hosts are wonderfully kind and there is definitely a room in the right location and price range for anyone."
    },
    {
        "id": "350",
        "body": "Airbnb is a great way to immediately get plugged in to a new destination! You tend to stay with people who know their way around and usually willing to share their experiences!"
    },
    {
        "id": "351",
        "body": "Messages are super laggy it takes several seconds to send and if you exit before its done sending it just cancels. Also it won't let you go back and edit longer messages it just keeps skipping to the bottom."
    },
    {
        "id": "352",
        "body": "Frank and Susan were very gracious hosts. They greeted us upon arrival and welcomed us to their lovely home. The studio is quite spacious and very comfortable. They provided coffee and tea an even left water and yogurt in the refrigerator. They offered to let us use the deck which overlooks the river. Their home is only 200 feet from a lovely rail trail. Should I visit New Paltz again I would be happy to stay there. Chandrika Behymer"
    },
    {
        "id": "353",
        "body": "Nice folks"
    },
    {
        "id": "354",
        "body": "I travel a lot and am so in love with Airbnb Always interesting & fascinating people I meet & great places to stay. I feel very safe & secure This is very important as a single senior woman. Not to mention the great prices!!!!! Sometimes even gourmet breakfast is included. I've had the pleasure of staying in a luxury artist 's home on the coast of Oregon a room in a mansion in Seattle a Victorian cottage in Washington an adorable log cabin in Montana the list goes on and on. On my wish list w/ Airbnb?? A castle in Italy a thatched hut in Fiji cabana in the Caribbean I chalet in Germany maybe an igloo in Greenland ? What's on my bucket list after that ???? Maybe a room in a space station on the MOON ! Yea!"
    },
    {
        "id": "355",
        "body": "Love love LOVE the app BUT the latest upgrade doesn't open on my iPhone 4. Please fix! Previous version was the bomb diggiddy with only minor crash issues."
    },
    {
        "id": "356",
        "body": "Treehouses airstreams you name it. Stay somewhere out of the ordinary and get back in touch with the world."
    },
    {
        "id": "357",
        "body": "Airbnb is the best !!!! I love bnb !!!!"
    },
    {
        "id": "358",
        "body": "The app keeps crashing stick with the website."
    },
    {
        "id": "359",
        "body": "My only concern with the app is that it crashes when you try to go into desk top mode from your mobile. Otherwise amazing!!! In regards to AirBNB itself i think it needs to be made very clear to the host that if you accept my reservation and then cancel FROM YOUR END I forfeit the $5 AirBNB fee because I have to cancel from MY end to get my money back. That doesn't seem quite fair. Other than that I use this website constantly."
    },
    {
        "id": "360",
        "body": "I love Airbnb but the app is terrible. It's slow crashes takes FOREVER for changes to update if it even does update. Lots of times your edits or changes won't go through."
    },
    {
        "id": "361",
        "body": "My husband and I love this app we love to travel so it makes it affordable for us to go places love it"
    },
    {
        "id": "362",
        "body": "Excellent app. Use it for booking and hosting. Please create an iPad app!"
    },
    {
        "id": "363",
        "body": "No idea what I'm doing .... But I like it... I had a booking while I was still filling in the apt details .... :) something working over here"
    },
    {
        "id": "364",
        "body": "Easy to use pretty good apartments! Really enjoy"
    },
    {
        "id": "365",
        "body": "Our quiet clean and sunny room in this well-appointed contemporary home was upstairs. The bathroom with shower was just across the landing. Street parking was convenient in this quiet neighborhood centered around a fabulous community park. Barbara is an accommodating hostess and very helpful with impeccable restaurant recommendations. We're looking forward to another Boulder adventure soon!"
    },
    {
        "id": "366",
        "body": "App is workable on the iPad but what the heck is taking so long for a dedicated version for the big screen?"
    },
    {
        "id": "367",
        "body": "Thank god you guys finally fixed the bugs in host inbox and host home..."
    },
    {
        "id": "368",
        "body": "Great app! I use it often to see the status of my trips and traveler-welcoming-home."
    },
    {
        "id": "369",
        "body": "This app makes it so easy to use except it always crashes suddenly. Hopefully this bug can be fixed asap! If it didn't crash I would have rated 5/5"
    },
    {
        "id": "370",
        "body": "Andrea was quick to respond to my inquiries. She was able to be home when we checked in. The place was clean and had lots of shelves to use which helped us a lot. It was a little smaller than we anticipated so we had to sit on the bed or move to another part of the room while the other person walked by. Andrea had fresh fruit out which was nice for our mornings. This place was designed for a tall person....the closet rod and bathroom mirror were almost too high for my 5'3"
    },
    {
        "id": "371",
        "body": "New iPhone 6 plus iOS 8.0.2 updated app Facebook login is broken. Fix asap. It's hard to be a host and not use your app to communicate with guests. Please fix"
    },
    {
        "id": "372",
        "body": "Please issue an iPad-friendly version such as horizontal support. PLEASE!"
    },
    {
        "id": "373",
        "body": "Good first use it"
    },
    {
        "id": "374",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival if you find a place that offers instant booking. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!!"
    },
    {
        "id": "375",
        "body": "I've booked w airBNB a few times now both for business and for fun. Each trip has been a wonderful experience. This app could be improved however if the option to sort by price and by distance from a particular place of my choosing (ie distance from a convention center distance from a relative's home etc). I had trouble w a reservation homeowner backed out at the last minute due to an issue w the condo. I called the airBNB service number was quickly given a refund and was assisted in finding a compatible rental. I will definitely continue to book thru airBNB."
    },
    {
        "id": "376",
        "body": "Airbnb is amazing! The app is easy to use has a few bugs but other than that it's great!"
    },
    {
        "id": "377",
        "body": "The app is very easy to use. I travel in Europe a lot and this is my favorite way to find places to stay."
    },
    {
        "id": "378",
        "body": "I really wanted to fall in love with the AirBnB app but there is just far too much that is wrong with it. 1) TOO MUCH LAG between typing on the keyboard and the text showing up on the screen. It really makes communicating a painful task. 2) ID verification is insanely buggy. I "
    },
    {
        "id": "379",
        "body": "First they really need to make a proper iPad app. The app itself is very clunky and not very intuitive. Wish list works but you can't change name of the list. Unable to delete messages within the app. And wish you could define more filters. I actually find it easier to use the web version on my iPad. That being said the service is great!"
    },
    {
        "id": "380",
        "body": "I just downloaded this app. Not to find a place but to find out exactly what AirBnB's arrangement is with Hosts and a Guests. Like 9/22 I've been subjected by my Neighbour renting out her apartment for well over 15 years. At one point she was living in a different part of the city so she could keep rentals going. A revolving door odd strangers in the hall late at night and a constant worry as to who these people are staying right next door. The 24/7 doormen are obviously partnering in this operation. Many years ago I wrote the building management a letter of concern about my safety. Things had progressively worsened and it became like a hotel. Management tried to resolve but couldn't prove anything so let it go. Now there are others doing the same. Meanwhile I respect my rent stabilized lease agreement. I follow the rules. It's not right to disrespect rent stabilization which is intact to protect us from outrageous rents. As long as my Neighbour and others like her continue we will soon see the end of stabilized apartments and serious loss of security. It's especially disturbing that the doormen are participating when their function is to protect us. Sorry but I'm with 9/21 100%. It's been terrible. And why should I have to leave to get away from this. Hardly fair that doing the right thingamajig forced out."
    },
    {
        "id": "381",
        "body": "Great app and homes!!!"
    },
    {
        "id": "382",
        "body": "Freezes and crashes all the time. Unable to use app so I go directly to the website which is awesome for finding places to stay all over the world."
    },
    {
        "id": "383",
        "body": "Airbnb's app is a wonderful example of a mobile application that has a full feature set that equally matches their entire web application. The beautiful interfaces are matched with intuitive navigation and a stable backend."
    },
    {
        "id": "384",
        "body": "This is a beautiful historic monastery in a convenient location. We loved staying here! There are many bedrooms 2 nice kitchens and a cozy family room. The setting is also gorgeous with scenic overlooks of the medieval hill town from the upstairs bedroom and a few lovely garden areas around the house. The owners were also kind and accommodating when our arrival was delayed."
    },
    {
        "id": "385",
        "body": "Best of its kind."
    },
    {
        "id": "386",
        "body": "Good app! Must have"
    },
    {
        "id": "387",
        "body": "Wonderful app in finding beautiful places to stay."
    },
    {
        "id": "388",
        "body": "Great service great app"
    },
    {
        "id": "389",
        "body": "Love airbnb and this app is great!"
    },
    {
        "id": "390",
        "body": "Air Bnb has changed my life! Hosting has allowed me to make enough extra cash to pay for my travels almost entirely. I have also never had a negative experience renting on Air Bnb (in multiple different countries). With Air Bnb certified photos (they have hired photographers to take pictures of their listings so you know they are real) you are really aware of what you are getting before you arrive. The host reviews and other host data provided by Air Bnb also helps you get an idea if the situation is a good fit. I LOVE IT. Have recommended it to many and will continue to do so."
    },
    {
        "id": "391",
        "body": "iPad version still not available. <Sheesh>. So iPad users turn your devices sideways and struggle with your keyboards. What a pain."
    },
    {
        "id": "392",
        "body": "who ever made this app..THANK YOU"
    },
    {
        "id": "393",
        "body": "Debbie's house was just right. We found it clean and inviting. Perfect distance from downtown if you don't mind walking a mile. Debbie was easy to reach and responded promptly."
    },
    {
        "id": "394",
        "body": "Great app. Easy to use. Excellent and simple UX."
    },
    {
        "id": "395",
        "body": "Previously 5 stars but downgrading to 1 after the silly auto-adjusting map view feature. It's driving me insane! I get the concept but there needs to be an option to turn that thing off. For example if I move the map to an area with no listings the interaction falls apart. Im forced to basically start over."
    },
    {
        "id": "396",
        "body": "This app is good. But I hate when I'm scrolling through the map looking for places along a route I might take and it keeps snapping me back to the last cluster of hosts. If I scroll up some on the map and there are no hosts please don't snap me back to the last ones. This is a big issue as it makes the finding of hosts very difficult. Fix this issue and it could be a 4 or 5 star app."
    },
    {
        "id": "397",
        "body": "This app was very easy to use."
    },
    {
        "id": "398",
        "body": "It is the best app ever it is so cool!!!!!!!"
    },
    {
        "id": "399",
        "body": "Amazing. So simple."
    },
    {
        "id": "400",
        "body": "To receive $25 off your first trip use the code "
    },
    {
        "id": "401",
        "body": "Great way to find smaller boutique hotels & hostels & BnB's that aren't on bigger sites. It's also great to find cheaper alternatives in bigger cities."
    },
    {
        "id": "402",
        "body": "I have tried this apps for four days and booked one Air BnB reservation despite having frequent problems with the apps. My experience is that it is not user-friendly with an iPad and poorly compatible. To accomplish anything: such as the initial verification selection or finding a AirBnB or writing a review required each task to be duplicated or triplicates in order for it to work. And more than once frozen screens appeared which requiring one to start over. At this particular writing there appears to be insufficient technical support to operate this apps. After my initial B&B I wrote a very positive review of the site AirB&B kept rejecting no matter how I changed it. There is no option in the help mode to resolve these issue."
    },
    {
        "id": "403",
        "body": "Just FYI for designer who didn't check their spelling"
    },
    {
        "id": "404",
        "body": "Perfect for us who travel with our mother-in-law and 2 teenagers. We can get 2+ rooms and 2+ bathrooms with living space and kitchen for far less than 2 hotel rooms. We've been able to do this where our kids go to college (perfect for move-in dates with time and space left to relax and enjoy the city areas). We've also used airbnb especially in Europe where hotel rooms typically only sleep 2 people. I don't know what we would have done before airbnb. Oh yeah we would've spent twice as much or more and have been totally cramped :)"
    },
    {
        "id": "405",
        "body": "This is a beautiful historic monastery in a convenient location. We loved staying here! There are many bedrooms 2 nice kitchens and a cozy family room. The setting is also gorgeous with scenic overlooks of the medieval hill town from the upstairs bedroom and a few lovely garden areas around the house. The owners were also kind and accommodating when our arrival was delayed."
    },
    {
        "id": "406",
        "body": "You cannot verify yourself using the app it only allows you to use an American number needs to be fixed asap"
    },
    {
        "id": "407",
        "body": "New iPhone 6 plus iOS 8.0.2 updated app Facebook login is broken. Fix asap. It's hard to be a host and not use your app to communicate with guests."
    },
    {
        "id": "408",
        "body": "This app is extremely valuable to those who like or want to travel but are tired of hotels. Or simply can't afford quality hotel rates. Is anything perfect? No. But to sit here and bash it like I recently saw from a review written on 9/21...is childish really. Airbnb has helped me put together a 12 city tour throughout Europe this coming October and November. The app is very user friendly and smooth. Only improvement I'd recommend is when on map view looking at rental listings/options it will "
    },
    {
        "id": "409",
        "body": "I could get lost in this app for days. I love simplicity of the design and the swipe features to navigate between Host and Traveler. I almost love using the app more than the website because scrolling through photos is super fast and messaging is simple. Definitely worth downloading- you will be hooked!"
    },
    {
        "id": "410",
        "body": "What started as an innovative & fun service has snowballed into a civic menace that expels longtime residents and interferes in local government. Slowly seeing my residential neighborhood in San Francisco change from a beloved tight-knit community to one overrun with rude oblivious tourists using AirBnB to jetset in a neighborhood that was never intended to have them I'm truly saddened. To have AirBnB begin to use my private email login for unsolicited and misleading political petitions to expand their footprint in municipal government is too much. I'll be deleting my account and if you care about the vitality of your community I urge you to follow suit."
    },
    {
        "id": "411",
        "body": "very impressive and easy to use"
    },
    {
        "id": "412",
        "body": "Beautiful app. Wonderful company. Lovely community. Airbnb is the best."
    },
    {
        "id": "413",
        "body": "The app has a clean easy interface and loads of functionality for AirBnB hosts and guests."
    },
    {
        "id": "414",
        "body": "Best thing ever. You'll find the best deals"
    },
    {
        "id": "415",
        "body": "Just a super easy to use app. I can manage my listings with all the functionality of the desktop site (updates calendars emails) which saves me a ton of time. As a guest I can easily check out potential stays with access to all the details of the listing and book through the app. Which is helpful when traveling without itinerary."
    },
    {
        "id": "416",
        "body": "I recommend air bnb for does who need rental or want to rent they place"
    },
    {
        "id": "417",
        "body": "One of my top apps for traveling I really love it and I use it any chance I get when I travel must-have if you're looking for place to stay. Used this app to get rooms in Manhattan Brooklyn and Las Vegas. Cannot recommend enough."
    },
    {
        "id": "418",
        "body": "I have had nothing but positive experiences with air bnb. I sometimes wish the searching feature had a bookmark function but you can always save places to a wish list . I host and use as a guest and recommend it all the time."
    },
    {
        "id": "419",
        "body": "Amazing app and great company!!! Highly recommendable"
    },
    {
        "id": "420",
        "body": "I loved staying w hosts in San Francisco and felt lucky to be in a sweet home and live in a hip hood!!!"
    },
    {
        "id": "421",
        "body": "Airbnb is better than this app. When I 'REALLY' want to do stuff I use my computer. This app could be much better. It's very basic and limited. I love Airbnb and I'm a superhost but this app lacks."
    },
    {
        "id": "422",
        "body": "We have never had a bad or even uncomfortable experience using Airbnb. Everyplace we have stayed has been more than kind accommodating and helpful! It's a blessing to have an option as well as be a part of locals opening their homes to newcomers and being their city's own advertisement!"
    },
    {
        "id": "423",
        "body": "Amazingly functional. No need to ever use the website again."
    },
    {
        "id": "424",
        "body": "Great app!!"
    },
    {
        "id": "425",
        "body": "Five stars for customer service alone! I own a condo and am a huge home body and I love meeting new people I only started in August and I'm well on my way to becoming a super host! If you have a room that needs renting and you love hosting do it you won't regret it! If you are a guest looking for a room for the night week or even month. This is a great alternative."
    },
    {
        "id": "426",
        "body": "This cozy country cottage was just what the doctor ordered for the stressful city life. The peace and quiet made this tranquil setting feel like Heaven on earth. It's the perfect hideaway. It's the place where time stands still. Everything was perfect from the minute we pulled into the driveway. We were greeted by Greg who gave us a tour of the place. Upon opening the door to the cottage we were greeted by the smell of homemade chocolate chip cookies on the table and soft music from Pandora. And I would be remiss if I failed to mention that even going to bed was a pleasure! There were mints on the pillow and an amazing mattress just waiting for us. We slept like babies as our stress melted away. I've got the Garners on speed dial now because we will be back...sooner rather than later! :) - Brandy & Brad Ward Memphis Tennessee"
    },
    {
        "id": "427",
        "body": "Junior Varsity app. Buggy erratic awkward to use. For a $10 Billion company it's pretty bad."
    },
    {
        "id": "428",
        "body": "The b&b was very convenient to get in and out. The space was small but very we'll appointed and clean neat and organized. The memory foam mattress was comfortable. I felt the price was appropriate and we enjoyed our stay. Late check out would have been a bonus."
    },
    {
        "id": "429",
        "body": "This app is the worse I have time to read "
    },
    {
        "id": "430",
        "body": "My husband and I have been hosts for about 6 months and have loved it! We have meet wonderful people from a variety of places many of whom we stay in touch with. We look forward to our first guest experience. This app allows me to better serve our guests with a faster response rate. The website is a bit easier to navigate but the app is great for communication or quick adjustments to the listing."
    },
    {
        "id": "431",
        "body": "I recently discovered this app when trying to plan my 10th anniversary. Our travel agent emailed me an itinerary that consisted of several average hotels with ok ratings for a price tag of nearly $2400 for 7 nights. I started looking on airbnb app on my breaks at work and could barely decide from all the wonderful places. The reviews were very recent within weeks. I inquired via the app on specifics on a few and got instant messages via text link that same night from the hosts. I loved being able to manage my bookings and pay all via my airbnb App! I received email confirmations and text and was able to adjust my settings all without getting on my laptop. And my 7 nights at 2 very private entire homes on the ocean in Iceland? $1100"
    },
    {
        "id": "432",
        "body": "This app is so easy to use. It has all the features of the set of the big website."
    },
    {
        "id": "433",
        "body": "This app is the coolest app ever."
    },
    {
        "id": "434",
        "body": "Very well kept & secure condo building in walking distance of downtown. The condo itself is immaculate as shown in pictures. No surprises. Barb & Dale were both very friendly & gracious hosts.. Barb took us to the train station on our departure day which was very helpful. This is a great spot to be in Vancouver."
    },
    {
        "id": "435",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos. Airbnb is also a great way to introduce bedbugs into your home or take them home with you after a stay. Bedbug removal is not covered under the 1000000 USD 'host guarantee'."
    },
    {
        "id": "436",
        "body": "This app is great I love it"
    },
    {
        "id": "437",
        "body": "Very sluggish. Freezes and then restarts constantly. A pain to use."
    },
    {
        "id": "438",
        "body": "I absolutely LOVE airbnb. Make sure to talk to the host prior to booking and you'll get the best experience possible."
    },
    {
        "id": "439",
        "body": "It works perfect every time. Thanks!!!"
    },
    {
        "id": "440",
        "body": "And the web mobile site has a different bug(select dates). So on the go I could not do anything. The error message with FB login is also very unhelpful. (Turns out the app did not immediately request access to FB credentials which it should. This resulted in unauthorized app trying to log in with FB but couldn't. So please fix the default FB app access request as well as the error message. Thank you.)"
    },
    {
        "id": "441",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s easy to book rooms even a few hours before arrival if you find a place that offers instant booking. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I recently stayed at a place in Dubai for almost a month and I quickly became friends with the people I was living with. They showed me all the places to go only locals know about and we did a lot of things together. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!"
    },
    {
        "id": "442",
        "body": "Love this company and this app is a perfect addition making it easy to search quickly and efficiently on the go - the better for last minute travel plans!"
    },
    {
        "id": "443",
        "body": "Freezes doesn't allow panning resets filters keeps locking me out with the "
    },
    {
        "id": "444",
        "body": "Can someone PLEASE fix the incredibly annoying map which keeps bouncing you where it wants you to go when you're specifically trying to zoom in on a certain (different) location to see the listings in that location??? Makes it very difficult and irritating to use."
    },
    {
        "id": "445",
        "body": "Usually apps function woth lower efficiency than its associated website. While this applies to airbnb as well the workability is hogh enough and it's functionality is wide enough to justify using the app only."
    },
    {
        "id": "446",
        "body": "This app is easy to use. I just wish there was a way to view listings in order of price location ratting ect."
    },
    {
        "id": "447",
        "body": "Love this app and I am sort if addicted to it Keep up the amazing work you do Joel"
    },
    {
        "id": "448",
        "body": "Not only has Airbnb changed my life and helped me pay for my mortgage in a rough patch the app is extremely user friendly! LOVE!"
    },
    {
        "id": "449",
        "body": "The latest apps seem to offer more and more support but with every new update it seems to get slower and slower... I'm getting tired of Airbnb's updates and I'm a host!!!"
    },
    {
        "id": "450",
        "body": "Airbnb app is very nice great subset of the web site functionality. The company is one of my favorite startups. Kudos on taking on the hotel industry!"
    },
    {
        "id": "451",
        "body": "I'm using airbnb for a trip to New Orleans in October. The price was much more affordable than a hotel and I even got a $25 discount using code TMURRAY46. Booking was super easy the host communicated quickly answering all my concerns."
    },
    {
        "id": "452",
        "body": "The savior to all of my travel problems. Love love love this app. Super affordable."
    },
    {
        "id": "453",
        "body": "The app itself is easy to use. Some people seem to disagree with the policies but I don't know about that."
    },
    {
        "id": "454",
        "body": "I have used this to travel several places now and what a perfect option outside of hotels which are just too expensive if you don't want to sleep with bed bugs!"
    },
    {
        "id": "455",
        "body": "Great app!"
    },
    {
        "id": "456",
        "body": "I love how I can add different categories of favorites list like places that would be good for work trips vs vacation trips. I was easily able to message my host from within the app and have me easy access to my hosts when en route. I have a iPhone 4S and it runs smoothly for me no issues...I heard some other complaining about asking for a photo... Your staying in peoples homes a little self sharing is to be expected... I love this app!! I catch myself daydreaming on it all day!!"
    },
    {
        "id": "457",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos. Airbnb is also a great way to introduce bedbugs into your home or take them home with you after a stay. Bedbug removal is not covered under the 1000000 USD 'host guarantee'."
    },
    {
        "id": "458",
        "body": "Airbnb is such a great idea - so many people have had great travel experiences through this service. This makes the app seem like a heartbreakingly disappointing user experience. The map stinks communication with an owner of a place seems impossible calendars and availability seem indecipherable and inconsistent. And this only happens if the app doesn't crash on you. I'm looking elsewhere."
    },
    {
        "id": "459",
        "body": "I am happy to use this app since it is easier for me to manage multiple reservations at the same time. Thanks"
    },
    {
        "id": "460",
        "body": "I think something's wrong since I can't even open the app. It shows I have 3 messages yet I can't see them. And their website seems glitchy as well. I've had problems recently receiving and sending messages. Please fix! Thank you."
    },
    {
        "id": "461",
        "body": "I love this app and how easy it has been to book our home! It's wonderful to meet all the like minded people from around the world."
    },
    {
        "id": "462",
        "body": "New app update has lots of problems. I know there is traffic on my account because I get push notifications but since I updated I can't get any messages within the app. This is a huge problem."
    },
    {
        "id": "463",
        "body": "That app is really best rare because I can find people that offered stay at their house or apartment instead of hotel or motel!!! And best price cheapened!!!"
    },
    {
        "id": "464",
        "body": "This app is extremely easy to navigate and opens up any trip to amazing home-away-from-home possibilities at a hotel price or less! For my first trip I booked an absolutely beautiful apartment with two rooms a full sized kitchen and a bathroom in the PERFECT location cheaper than the average hotel room price!! I'm so excited! Don't hesitate to try this app out!"
    },
    {
        "id": "465",
        "body": "The new update is really bad. I have been using he map view and as soon as there is nothing there it shows me a screen asking me to expand my filters or move around. Well I would air bnb but you won't let me leave the screen"
    },
    {
        "id": "466",
        "body": "I will add a photo if I want to. You do not need to keep bombing my session with the suggestion that I add one. It is extremely annoying."
    },
    {
        "id": "467",
        "body": "It would've great but it's so glitchy. It freezes. It won't show a place to reply half the time. It won't allow you to view some descriptions! And for hosts on the go it really should be a lot more functional. I really shouldn't have to go all the way to a computer in this day and age just to view certain things or do certain things. Come on airbnb you're worth like $15 billion can't you make a decent app!?"
    },
    {
        "id": "468",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s easy to book rooms even a few hours before arrival. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!!"
    },
    {
        "id": "469",
        "body": "Fairly new to Air BNB and have had excellent experiences so far. The app really helps to stay in touch with the hosts!"
    },
    {
        "id": "470",
        "body": "Awesome App!!! So glad that I downloaded it."
    },
    {
        "id": "471",
        "body": "I can't get to see or manage my transaction on the app which is a very important part. Overall it's a good app"
    },
    {
        "id": "472",
        "body": "Made booking for 3 days 2 nights stay the total charges ended up more than double the rate.To make matters worse I was already billed 2mos. prior to check-in...when i should only be charge w/in 24hrs upon check-in! Rip-off!"
    },
    {
        "id": "473",
        "body": "First let me say the service airbnb in general is great. I use it almost every month. The website is generally pretty good. This iphone app on the other hand could use some attention. Things to fix - The messaging is pretty bad. I get a notification that I got a new message and then when I click to view it I cant see the latest message thread. If I scroll down I find the message thread randomly in between old message threads. Doesn't seem to be sorted by last updated properly. They also take a very long time to load. - When doing a search and looking at the map the auto snap to a place is very annoying. At least provide an option to disable this. - In the app and web app it would be nice to filter by people that already have reviews and by average rating."
    },
    {
        "id": "474",
        "body": "Trying to browse offerings on the map is very hard because the app keeps re-centering to some listing of its choosing. This makes it practically impossible to adjust the area you want to look in."
    },
    {
        "id": "475",
        "body": "Difficult and confusing to use.. Earlier version was great worked well and once again a perfectly good useful app has been replaced with a frustrating "
    },
    {
        "id": "476",
        "body": "works exactly the way i need!!!"
    },
    {
        "id": "477",
        "body": "There is a lot of fluff and not a lot of function particularly for hosting. It's unfortunately there is no way to check payments. Also it is not intuitive navigation to try to get to hosting messages."
    },
    {
        "id": "478",
        "body": "When browsing airbnb website on iPad Safari crashed a lot."
    },
    {
        "id": "479",
        "body": "Wow what a great service! I cant think of sleeping at hotels after using this service."
    },
    {
        "id": "480",
        "body": "I was given short notice to leave a friend's house while staying with them in Italy. I had heard about airbnb and downloaded it to my phone to give it a shot - before I knew it I had all my plans for the places to stay solidified and found some really unique and charming locations. The app was easy to use and even to validate my ID while overseas. The system is fairly intuitive and comprehensive."
    },
    {
        "id": "481",
        "body": "Can't get app to sign into my account. Unable to use at all."
    },
    {
        "id": "482",
        "body": "Unlike the website one can't log in using your existing Google account. Very frustrating..."
    },
    {
        "id": "483",
        "body": "Visually appealing and very attractive. Good job!"
    },
    {
        "id": "484",
        "body": "The app bugs out (no pun intended) and doesn't work."
    },
    {
        "id": "485",
        "body": "Price range filter is totally insane!"
    },
    {
        "id": "486",
        "body": "New interface takes forever to load messages and requests. Inbox messages are not loaded at first or sometimes do not load at all."
    },
    {
        "id": "487",
        "body": "Awesome website. Great application for easy and fast access. They showed the right meaning of standing for their customers. They have owned my vacation plans for sure."
    },
    {
        "id": "488",
        "body": "Amazing concept. Put people together and share their love of travel. We have had nothing but positive experiences. Blessings"
    },
    {
        "id": "489",
        "body": "Why does the map need to recenter on the selected property?? It makes it impossible to move the map around and the result is a UIUX disaster."
    },
    {
        "id": "490",
        "body": "This site hands-down has the best customer service ever and their mobile app is very user-friendly. I recommend air B&B to the world"
    },
    {
        "id": "491",
        "body": "I have a head ache. Trying to search for listings in a specific area. The map search is awful! I can't change languages. Hello: I am traveling in a foreign country. I don't know the language. What's the point seeing stuff in a language you don't understand? I see Starbucks locations. But not metro/subway locations. I can't search for listings that are closest to another location. Or are convenient by metro from where I want to go. The map just snaps in and out. And the listing it wants to show me takes up ⅓ of the screen. It's a phone app blown up ... There is no real estate to spare! Who came up with this interface? And it's 2014. Where is the ipad app? 2x the iphone app? Really!"
    },
    {
        "id": "493",
        "body": "Definitely using this all the time now! I used it while I stayed in New York for electric zoo and the place I had was cheap close and really nice!"
    },
    {
        "id": "494",
        "body": "We just spent the Labor Day weekend at 2425 Victory in Dallas TX. Mark Wang was the host. Fabulous accommodations. Quiet new and clean and a great location. Mark met us at the apartment to make sure we knew the essentials for making our stay effortless. Great spot if you want to stay in the heart of Dallas."
    },
    {
        "id": "495",
        "body": "I can't see why the perfectly usable website would push iPad users towards this tiny low res portrait only iPhone only disaster."
    },
    {
        "id": "496",
        "body": "Enjoying my guests altho i was very busy and could not say hello to them when I arrived :P"
    },
    {
        "id": "497",
        "body": "For some reason the map snaps to a random listing while you're looking and then centers on that spot. It makes the map nearly unusable. Why???"
    },
    {
        "id": "498",
        "body": "Whoever released this needs to roll it back up! I have attempted to book stays with complete frustration and mix ups. The app has reversed it performance of user ease. Avoid this new version...."
    },
    {
        "id": "499",
        "body": "It's impossible to search accommodations based on location. Whenever I try to search a new area it takes me back to the old area/listing I had clicked on. This wasn't a problem until the new app came out. I need the map view to work because I (and I'm sure many others) choose an accommodation based on location."
    },
    {
        "id": "500",
        "body": "I had a great experience both renting and leasing a room in my home. The app was very accessible an helpful in dealing with the bookings. I just started with Airb&b so I have no previous experience to compare with nonetheless it was a very smooth interaction."
    },
    {
        "id": "501",
        "body": "Update: new map interface is annoying. It "
    },
    {
        "id": "502",
        "body": "I use this app all the time. It works very well on my iPhone. I give it 5 stars since it is so helpful and easy to use. It works well every time."
    },
    {
        "id": "503",
        "body": "Simply amazing!"
    },
    {
        "id": "504",
        "body": "I live in a pretty middle America type of place nothing special or so I thought and I was sure not many people would book the extra bedrooms in my house but AirBnB has blown me away since we started! We are booked up regularly sometimes even having to host people using air beds because we are out of room! Travelers international students people in between apts so so so many people! This app has been crucial in allowing people to contact me and book their reservations quickly because it sends me a special notice each time! I love meeting new people while I'm hosting them in my home and the extra $$$ isn't bad either! Love it! I recommend it to all my family and friends who have the space and are open minded."
    },
    {
        "id": "505",
        "body": "Gema and Lucio are wonderful hosts! The location is excellent with a beautiful view of the ocean. The apartment is small but everything was clean and practical. I managed to enjoy all the local sites without a car. Highly recommend!"
    },
    {
        "id": "506",
        "body": "This is a great way to travel on a budget. The bonus is meeting people along the way ;) I used it for the for time (make sure u use a coupon for your first sign up) and will be using it from now on in my travels."
    },
    {
        "id": "507",
        "body": "Love airbnb but this new app is terrible."
    },
    {
        "id": "508",
        "body": "I've had great experience so far with the service and host. Only issue I've had is waiting for my refund from someone who cancelled one of my bookings. It has been over 60 days and no refund."
    },
    {
        "id": "509",
        "body": "Yeah ya! Thx AirBnB."
    },
    {
        "id": "510",
        "body": "The app is beautifully designed and fun to use. Very good for "
    },
    {
        "id": "511",
        "body": "Search function on map doesn't work properly and it's driving me crazy."
    },
    {
        "id": "512",
        "body": "works exactly the way i need!!!"
    },
    {
        "id": "513",
        "body": "The latest update renders map searching unusable. In fact it's a worst search experience I've seen on any app ever. The map snaps you to predesignated listings and doesn't let you search specific areas. It's like a cat and mouse game to reach a neighborhood. Not to mention the suggested listings now covers 15-20% of the screen real estate. The map sometimes snaps you so out of the area you were searching you can't even find out where you are which prompts you to pinch out causing MORE SNAPPING. Terrible awful experience for an otherwise great company."
    },
    {
        "id": "514",
        "body": "Air bnb is the greatest social experiment/experience I've been a part of. The app handles everything in stride and it really couldn't get much easier for people to connect face to face by clicking a button. The concept is world changing. The experience is next to nothing. Traveling has just met another friend. It's called Air bnb"
    },
    {
        "id": "515",
        "body": "Nice to see refreshing n simple UI"
    },
    {
        "id": "516",
        "body": "Visited Omaha for the first time to attend my cousin's wedding. Boarded the train four blocks from my house in Detroit and arrived in Omaha three blocks from my AirBNB host apartment; the wedding was across the street at the Durham Museum the next morning! My host was an interesting person and the accommodations were a great value. Thanks to my host and AirBNB!"
    },
    {
        "id": "517",
        "body": "Loving it! Everything is smooth and runs good."
    },
    {
        "id": "518",
        "body": "This app is a slight improvement over the previous one. Slight. It's still incredibly buggy very slow and has some annoying futures. • I know when I'm not on wifi. I often don't have a network connection or Wi-Fi when I travel. I still need to access the information on the air B&B app. Please don't constantly tell me that there is no network connection available. • The messages are very buggy. It takes a long time for new messages to load. Overall I still prefer using the desktop version. Which is a shame because location identification is one of the main features that I like on the mobile app."
    },
    {
        "id": "519",
        "body": "I'm so hooked on using this app and the idea of staying in people's properties around the world rather than paying too much on hotels!!! The app itself is clear user friendly and has all of the information needed for you to book your next vacation:-) Happy Travels!!!"
    },
    {
        "id": "520",
        "body": "Although the new app looks really appealing and cool it has made managing things way way more difficult and slow. It takes forever to browse between messages profile info and calendar. The same thing applies to the new website. It looks alright and the idea is innovative but it is also a lot slower. Before when I needed to edit something up that wasn't available on the app I would use the website through my phone. Now it is too heavy to be loaded on the phone but also is the app! I love AirBnB but have to admit that I'm not satisfied with the new interfaces."
    },
    {
        "id": "521",
        "body": "Good app! Must have"
    },
    {
        "id": "522",
        "body": "This new app is SOOOO slow that my phone even closes the app down before it finally opens up. I used to have a sterling ranking for my communication with Airbnb guests. Now I wait til I'm home and on my computer to respond to guests but it's really the only thing I do on my computer anymore so I often forget. It was so nice to be able to handle things as they cropped up. Now my communication ranking has dropped to the bottom. One of my favorite things about Airbnb as a host was how easy the app made everything. I have stopped taking reservations and in 3 weeks will move on to another way to rent out my place."
    },
    {
        "id": "523",
        "body": "This app is the coolest app ever."
    },
    {
        "id": "524",
        "body": "The map keeps snapping back when I try to move it around. Impossible to check out the surrounding area now."
    },
    {
        "id": "525",
        "body": "Used to love the app but now when searching on a map view to find a specific location in a city it's become impossible because it jumps all over and auto pulls up a property I haven't clicked on. Please fix so it runs smoothly like it used to."
    },
    {
        "id": "526",
        "body": "Works perfect what more is there to say"
    },
    {
        "id": "527",
        "body": "I NEVER write reviews—WAY TOO busy. But the new app is SO PAINFUL to use I am MAKING the time! Airbnb’s app used to be pretty cool was easy to manage my listings and effortless at seeing who was coming and going. In their effort to update it and give it a fresh look they’ve messed with the functionality that used to make it so easy to use. The new app is U B E R S L O W to even open and t h e n i t i s e v e n S L O W E R T O R E S P O N D …. GGRRRRRRR—IT’S SOOOO FRIKKIN’ FRUSTRATING. There’s SEVERE TIME LAG when opening the inbox and THEN having to wait and wait and wait while the message appears that I’ve already been notified about SEVERAL minutes prior! The new app reverted several of my changes to pre-release information. It also appears to NOT SYNC with the information on the full website. For example in preview mode the pics are totally off and the descriptions do not coincide with the pics. I have no way of viewing what the guest is seeing so how do I know if this screwup only happens in preview mode? Or if it’s what the traveler actually sees when looking at my listing? (Making it EMBARRASSING to EVERYONE if it is!) It’s a real pain to use. When I called customer service to alert them to the issue so they could research and correct it and waited 15 minutes to be connected I found myself talking (again) with another know-it-all who was NOT paying attention and had SHOCKINGLY DEFICIENT listening skills. I had to REPEAT myself MANY TIMES (your name begins ’S’ like Sierra? I’ll repeat for the second time “It’s ‘F’ like FOXTROT!” … HOW CAN YOU SCREW THAT UP??!!). I’m giving up on calling Airbnb and seriously considering listing with other providers."
    },
    {
        "id": "528",
        "body": "I am a single mom with two kids. Being a host is not only fun but it is a great experience for my kids. We get to meet people from all over the world share our beautiful city and make money too! Airbnb has positively impacted our life in so many ways ! Thank u Airbnb!"
    },
    {
        "id": "529",
        "body": "A+!"
    },
    {
        "id": "530",
        "body": "One app which is a must have!!"
    },
    {
        "id": "531",
        "body": "Why does the map now jerk back to the previous location instead of repopulating as the map moves? So frustrating that I gave up my search!!! Also I tried to find a way to leave a review for an owner but couldn't find a way to do so."
    },
    {
        "id": "532",
        "body": "Our trip to Fairbanks was do relaxing much to the comfort of Arctic Roots. Thank you"
    },
    {
        "id": "533",
        "body": "I'm so glad I found this app. So far it's been simple to use and I found a great place to stay in L.A. YAYYY!!!"
    },
    {
        "id": "534",
        "body": "WIll this app PLEASE stop recentering the bloody map every single time I pan it? I panned it for a reason damnit..."
    },
    {
        "id": "535",
        "body": "Awesome for finding and listing homes!"
    },
    {
        "id": "536",
        "body": "I've used AirBnB several times now and thoroughly enjoyed my experiences. The only problem this far: when your host sends the link to write your review it seems to disappear after you open it whether or not you've written the review. My only recommendation is don't open the message until you have a minute to do it- there doesn't seem to be any other way to write reviews. Otherwise really clear really organized and really easy to navigate this app."
    },
    {
        "id": "537",
        "body": "This is so annoying! I move the map and it just takes me to a different spot. I tap on something I'm interested in and it says "
    },
    {
        "id": "538",
        "body": "When using the map search which is a critical tool in many cases the feature continuously centers itself wherever it desires making it impossible to search for places. App is essentially unusable but for messaging."
    },
    {
        "id": "539",
        "body": "Alexandre and his family stayed in my country house in the south west if France Everything went very well We communicate ahead of time regarding the logistics and what to see and do with a young child. Alexandre was very nice and I am very pleased to have him and his family staying at my place. He wrote me to let me know that it all l went well."
    },
    {
        "id": "540",
        "body": "Good job"
    },
    {
        "id": "541",
        "body": "I love it. Very very useful:-)"
    },
    {
        "id": "542",
        "body": "This app was so convenient whilst traveling through Europe and the Middle East. In some cases it was my primary form of communication with a couple of the hosts when I was without cellular service."
    },
    {
        "id": "543",
        "body": "I've used both the website and the app to book. I enjoy the app for searching properties but when it came down to booking my second place (first was booked through online) the app would get stuck when verifying my ID. I had to log on to the website version."
    },
    {
        "id": "544",
        "body": "Ugh. The app lost its easy to scroll and swipe functionality and instead. Looks like it's using Apple maps instead of Google too so if you try to zoom in or move to another area the map rotates to try to reorient and predict where you are trying to go. Spent 5 minutes fighting with it before I deleted it altogether."
    },
    {
        "id": "545",
        "body": "Can't search on a map any longer as it moves away from where you are looking for rentals. Too annoying to use to book something. Maybe doing some user testing before rolling out a new release would help..."
    },
    {
        "id": "546",
        "body": "Awesome App!!! So glad that I downloaded it."
    },
    {
        "id": "547",
        "body": "Every time I try to navigate in the map view it jumps the map from where I land to other spots miles away. (Regardless of whether there are listings.) makes it impossible to browse by location."
    },
    {
        "id": "548",
        "body": "This is a little buggy and definitely needs an iPad version. Looks MUCH better on their website."
    },
    {
        "id": "549",
        "body": "Guest-The update has been buggy I have seen different prices quoted to guest. As a host I always confirm information through the full website. Host- make sure you have reviewed your dashboard since the update many details such as minimum days has reverted to default (1day). AirBNB-since you don't offer a iPad app I use the phone one. Just a note the icon for the app hasn't been updated. I see when I open t through iTunes but on my tablet I only see the old icon."
    },
    {
        "id": "550",
        "body": "Map constantly snapping around is garbage"
    },
    {
        "id": "551",
        "body": "The recent scheme change and user interface changes have made this app drastically more difficult to get things done in a quick manner. It was once easy to swipe left to right to scroll through my listings and see who was there when they were leaving and who wasu arriving next. Now its in an unordered jumble of a list without easily identifiable photos of my listings and guests. The app takes minutes to load messages after I receive notifications which is extemely frustrating. The maintained inability to change prices of individual dates on the app is still a great inconvenience as well. Developers should have spent more time on logistics and functionality and less on the unattractive new logo and color scheme. And not to mention the extra video on the desktop version that makes it seem like you're watching people as they sleep toss and turn is creepy and makes the website work a lot slower than it used to. AirBnb- you're spending all this money to try to and keep NY state legislators off your back but then spending more money on making a less functional app. Don't burn the candle at both ends. Keep it simple. I am very displeased with relaunch of the app."
    },
    {
        "id": "552",
        "body": "The map on this version is terrible. It recenters and reverts to the zoom it wants. I guess I'm too stupid to scroll and zoom map and this version needs to do it for me ?"
    },
    {
        "id": "553",
        "body": "Map automatically redirects where it wants you to look not where you want to look. Searching is totally different than on the site so if you want more tailored searches (like airstreams) you have to use the site. My friend was able to find some great spots in a town we are going to in December that I couldn't find on the app. Lastly sometimes opening a location from the browser doesn't work well."
    },
    {
        "id": "554",
        "body": "Old version wasn't orrery but was rock solid. This v. Is pretty but it freezes every time. Useless. Debating on going to the website or using VBN instead. Guys you blew it on this one."
    },
    {
        "id": "555",
        "body": "who thought that we needed the map to move by itself? someone at airbnb that should have been fired."
    },
    {
        "id": "556",
        "body": "I love this website and the service it provides. I plan to use it to book a flat in London for a month next summer. However the app doesn't give the option to log in if your account is a google plus account! I have found no way to log on to the app using my account. Additionally I've contacted someone in the company and haven't heard back about this issue. I can't locate any phone number or email for the IT support of this app. It's EXTREMELY frustrating. Great service and website terrible IT support and upkeep."
    },
    {
        "id": "557",
        "body": "The apartment was beautiful; in a great location. However the amenities were sparse. There was no soap for the shower no blanket for the sleeper sofa and only one roll of toilet paper ."
    },
    {
        "id": "558",
        "body": "Some guy had hidden fees so i cancelled then airbnb still charges me a fee. And I did this within an hour"
    },
    {
        "id": "559",
        "body": "Easy to look up properties on the go."
    },
    {
        "id": "560",
        "body": "Map view has an issue. It keeps jumping back to last view when your scroll."
    },
    {
        "id": "561",
        "body": "Yadayada Airbnb is great but the map browsing is unusable in this version. Every time you try to move to a new place the map re-centers itself on a random listing that was visible before you scrolled. It's incredibly frustrating please fix it airbnb!"
    },
    {
        "id": "562",
        "body": "Thanks."
    },
    {
        "id": "563",
        "body": "Wish more home owners used this app. Such great visibility!"
    },
    {
        "id": "564",
        "body": "I like this app it help make my experience using Airbnb more easier as a first time user. Haven't notice a lags or glitches yet just let it stay that way."
    },
    {
        "id": "565",
        "body": "Since most Americans are monolingual they tend to believe that everybody is happy when this app is installed in their own language. They probably look up the current keyboard setting and install that linguistic version with no option to change it later. In fact most of my guests speak English and I don't see any point in changing to the rather obscure language I had at the keyboard at that moment. Also since I happened to be in Luxembourg when I downloaded the app my property suddenly got relocated there."
    },
    {
        "id": "566",
        "body": "I've been a guest 3 times. NYC twice first time not great & false advertising by host 2nd time host had roommate issues very uncomfortable situation so I didn't stay in LA great place & location but then plumbing issues-no fault to host or myself. As a host its been good mostly nice & respectful guests and the app was very helpful to manage everything last update makes the Map go where it wants not where I wanted to look. I've now had another 5 AirBnB guest experiences in NYC. Out if the 5: 2 were good (not great) 1 ok 2 horrible! Cleanliness being the biggest issue or feeling like a hostel b/c multiple guests. Horrible as in mold on shower curtains tons dried toothpaste on sink and a huge cockroach! The pics were nothing like the real thing. Better probably if you rent "
    },
    {
        "id": "567",
        "body": "This app is quite good when it comes to keeping in touch with the host and alerting you. But I find the search capabilities not as smooth or well thought out as the newly updated website. Hopefully they will update the app soon as the recent website updates are excellent."
    },
    {
        "id": "568",
        "body": "My listing still links to old pictures of my condo that are not relevant anymore. Do you do beta testing of your new versions before you release them? These are rookie mistakes."
    },
    {
        "id": "569",
        "body": "The website is great. The app on the other hand is awful. Everytime you search is jumps and pulls the screen somewhere else. Once they fix it 4star app. I recommend once update. Till then use their website"
    },
    {
        "id": "570",
        "body": "Very useful!"
    },
    {
        "id": "571",
        "body": "I just updated the Airbnb app and everything is smooth except when I search through map the map move and pulls around involuntarily even when I try to look in certain area. the map quickly pulls and focuses to neighboring areas instead on its own making map search stressful. I never had this issue on precious version on Airbnb app. Please fix"
    },
    {
        "id": "572",
        "body": "This new featured listing on the map view makes it completely unusable and so frustrating. I want to zoom in on an area of the map and click on listings which is currently impossible because I keep getting zoomed back to area with the featured listing."
    },
    {
        "id": "573",
        "body": "When your host is rude and the place is very different from the description AirBnB doesn't care about you. Be very careful!"
    },
    {
        "id": "574",
        "body": "Why make the search auto-zoom to a location? Who's stupid idea was this?! Disable that function for God's sake and then fire the maroon who thought it would be cool to have my map area NOT be where I want it to be. Jeez."
    },
    {
        "id": "575",
        "body": "Great idea for travelers. I've used airbnb a great deal and have loved every place I've been to. However it seems like they focused more on the redesign than on creating a functional app. It force quits consistently which makes it hard to look at current reservations or messages. Yes I have downloaded the most recent update which was suppose to fix bugs! I guess I'll have to stick to the desktop version until they fix this newly redesigned app that didn't really need a redesign."
    },
    {
        "id": "576",
        "body": "The app was perfect until the new update. Now in map view you can no longer zoom in and focus on a certain area. The map continuously adjusts the screen position for you regardless if where you are searching. Please fix. Thanks!!"
    },
    {
        "id": "577",
        "body": "Love Airbnb. But the app selectively updates messages and is generally buggy when I need it to work perfectly."
    },
    {
        "id": "578",
        "body": "I've been waiting more than 5 minute for my ID verification and it's still spinning. Earlier I had to cancel a reservation and the button didn't seem responsive- I just had to wait a minute but that's way too long for a web app. Why does google ID verification need access to metadata on my google drive and my contacts?"
    },
    {
        "id": "579",
        "body": "Easy to navigate and any shortcoming will be dealt with in updates I'm sure."
    },
    {
        "id": "580",
        "body": "It was really helpful and friendly used. It made my vacation better and easier"
    },
    {
        "id": "581",
        "body": "Version 4.1.1 that I am using has a feature that drives me nuts. I like to move around on the map to find various rentals in different areas. Now when in the map when trying to move around the map readjusts itself to center on a highlighted listing. Makes it very frustrating to try and slide your view elsewhere and have it snap back into place."
    },
    {
        "id": "582",
        "body": "Use this code for $25 off: ASELLERS12 Airbnb is THE BEST!"
    },
    {
        "id": "583",
        "body": "awesome app really intuitive way to use the interface still need an iPad version plz!"
    },
    {
        "id": "584",
        "body": "This app makes it so easy to search through places to stay. I'd say it's a must-have for travelers who are trying to stay on a budget. My first time using airbnb and I felt very comfortable maneuvering through my options and reading reviews before booking a place. The map is great - you can zoom in super close and really see what attractions/restaurants etc. are right around the corner"
    },
    {
        "id": "585",
        "body": "I find this app designed well but it's complicated to do the simple things like see all you emails and conversations in one place I find the app it designed for viewing pleasure and not user friendly it would be really nice not to have an app crash 4 times while written and review."
    },
    {
        "id": "586",
        "body": "7.1.2 iphone 5s  i have problem to load i box its freeezing all the time!!! Please fix it"
    },
    {
        "id": "587",
        "body": "Great app great service. Love everything about it!"
    },
    {
        "id": "588",
        "body": "Love it love AirBnB!"
    },
    {
        "id": "589",
        "body": "The iOS app is so nice to look at that even if I'm not traveling somewhere I might end up booking some place...lol"
    },
    {
        "id": "590",
        "body": "First of all make sure you use the coupon AALSHURAFA to get $25 towards your next booking! To use it just open up the app and go to the main menu and you’ll find an option halfway down to enter it in. Airbnb is a fantastic service. I don’t see why anyone would book a hotel anymore when you can get a much better value by finding a place on AirBnB. At least you won’t be overcharged for Internet access like most hotels do! It’s also super easy to browse and book rooms and the selection is vast in many locations. It’s super easy to book rooms even a few hours before arrival. Whether you’re travelling last minute or planning ahead you'll find something that’s suitable for you. On the host's side it’s a great way to make use of spare rooms or empty apartments. Also a good way to meet new people! All the hosts I’ve dealt with are super nice and accommodating. I also love looking at all the unique places you can stay at world wide like the houseboats windmills castles planes over the top penthouses islands and even igloos! Just another reason why AirBnB is a better choice than hotels! I can see why some people don’t like the new update with the redesigned interface. But personally I don’t mind it and I think it gives the app a fresh new look. Overall you should definitely give it a try especially with the $25 off I gave you!!"
    },
    {
        "id": "591",
        "body": "Runs and works awesome"
    },
    {
        "id": "592",
        "body": "Something is wrong with the map view on the new update. It kept refocusing to a random spot and won't let me move the map to a neighborhood that I want to explore. Very frustrating. Going back to my desktop computer to use their website."
    },
    {
        "id": "593",
        "body": "I like this app ok- it still doesn't have all the functionality of the full website (like price filters! And choices of TYPE of place- etc) but it works pretty well..."
    },
    {
        "id": "594",
        "body": "Great design ease of use and functionality. As usual Airbnb is killing it"
    },
    {
        "id": "595",
        "body": "The AirBnB app makes accessing our reservations and info on the go super easy. I'm able to respond to requests right away and communicate with guests without being at my computer."
    },
    {
        "id": "596",
        "body": "This is very helpful. Now let's see if I get a coupon for writing a review since all the codes off the internet aren't working for a coupon."
    },
    {
        "id": "597",
        "body": "Love the app! Love the concept!"
    },
    {
        "id": "598",
        "body": "When you're traveling and writing people on AirBnB you accumulate a lot of emails. Unfortunately you cannot archive emails on the iPhone app. It's possible on the website but not the app. Really problematic when consistently writing people."
    },
    {
        "id": "599",
        "body": "Do you RENT the apartment you want to make extra cash on while you're away? You should know it's a rare rental contract that permits subleasing. If you're in a hot rental market or in a rent controlled unit you can almost guarantee you'll be evicted if discovered. My neighbor rented her unit to an endless stream of strangers who wanted to save cash on a hotel room. Airbnb and my neighbor's financial gain came at the expense of my privacy and safety. I alerted my landlord after some rude airbnb customers became my temporary neighbors. They had to leave the same day they arrived. My once tranquil apartment building had turned into a hotel. My neighbor came close to being evicted. If you are reserving an apartment that someone is RENTING you should ASK IF THE RENTAL CONTRACT ALLOWS SUBLEASING. If discovered by the landlord you could be immediately kicked out. Airbnb needs to inspect every host's lease and ban those who are contractually forbidden from using airbnb's service! It's amazing an insurance company wrote a policy for these yahoos."
    },
    {
        "id": "600",
        "body": "I really recommend this apartment for a family/ friends trip to Mallorca. It's just perfect! The location and the accommodation. You would need a car to explore the island but the host would help you and go further giving you some nice suggestions for visits and restaurants. Just amazing! Mallorca it's a must! Isabel."
    }
]
});