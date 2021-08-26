/*
Copyright (C) 2021 sixtysixgames

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
    Created on : 
    Author     : sixtysixgames
*/
    var aAdjs0 = new Array(
 "baked", "bald", "bare", "big", "boiled", "bony", "brawny", "broad", "broken", "bumpy", "burly", "burnt", "cheesy", "chubby", "chunky", "clean", "crispy", "crusty", "curly", "damp", "dark", "dead", "dirty", "drab", "droopy", "dry", "dusty", "dwarf", "elfin", "fat", "filthy", "flabby", "flaky", "flat", "fluffy", "foamy", "foggy", "fried", "frozen", "furry", "gaudy", "giant",  "grassy", "greasy", "hairy", "huge", "icy", "jagged", "large", "little", "long", "lumpy", "meaty", "mega", "messy", "milky", "minced", "mini", "misty", "moist", "mossy", "mouldy", "mucky", "muddy", "murky", "mushy", "naked", "narrow", "petite", "nude", "old", "pretty", "puny", "regal", "roast", "rough", "royal", "rusty", "saggy", "sandy", "scabby", "shiny", "short", "sick", "sickly", "silky", "skinny", "slim", "slimy", "sloppy", "small", "smooth", "snotty", "snowy", "soggy", "spiky", "spiny", "spongy", "spotty", "sticky", "stony", "stout", "stripy", "tall", "thick", "thin", "tinny", "tiny", "ugly", "vast", "watery", "wavy", "waxy", "wet", "wide", "woolly", "young",
);

    var aAdjs1 = new Array(
"amber",  "ash", "azure", "bamboo", "beech", "beige", "black", "blonde", "blue", "bone", "brass", "brick", "bronze", "brown", "canvas", "cerise", "chalk", "cheese", "chrome", "clay", "cloth", "copper", "cork", "cotton", "cream", "cyan", "denim", "ebony", "flax", "flaxen", "flint", "ginger", "glass", "gold", "golden", "green", "grey", "ice", "iced", "indigo", "iron", "ivory", "jade", "khaki", "lace", "lacy", "lead", "lilac", "linen", "maroon", "mauve", "metal", "midget", "nickel", "nylon", "oak", "orange", "paper", "pewter", "pine", "pink", "purple", "quartz", "red", "rock", "rocky", "rubber", "ruby", "sepia", "silk", "silken", "silver", "slate",  "snow", "sponge", "steel", "stone", "straw", "suede", "tan", "tin", "velvet", "violet", "wax", "white", "wire", "wiry", "wood", "wooden", "wool", "yellow", "zinc" 
        );

    var aNouns0 = new Array(
 "abbot", "actor", "adder", "adult", "airman", "angel", "angler", "ant", "ape", "archer", "artist", "ass", "aunt", "auntie", "author", "babies", "baboon", "baby", "badger", "baker", "banker", "barber", "bard", "baron", "bass", "bat", "beagle", "bear", "beard", "beaver", "bee", "beetle", "beggar", "birch", "bird", "bishop", "bison", "bitch", "bloke", "boar", "boxer", "boy", "bream", "brewer", "broker", "buck", "budgie", "bull", "bunny", "busker", "butler", "calf", "camel", "canary", "carp", "cat", "chef", "chick", "chief", "child", "chimp", "chub", "clam", "clown", "cobra", "cock", "cockle", "cod", "collie", "cook", "corgi", "cougar", "count", "cow", "cowboy", "coyote", "crab", "crane", "crow", "cub", "cuckoo", "dad", "daddy", "dancer", "deacon", "deer", "demon", "deputy", "devil", "diver", "doctor", "dodo", "doe", "dog", "donkey", "dove", "dragon", "drake", "driver", "drummer", "duck", "dugong", "duke", "dwarf", "eagle", "earl", "earwig", "eel", "elf", "elk", "emu", "fairy", "falcon", "farmer", "father", "female", "ferret", "finch", "fish", "flea", "flower", "fly", "foal", "fox", "friar", "frog", "geese", "geisha", "gent", "gerbil", "ghost", "giant", "gibbon", "gigolo", "girl", "gnome", "goat", "goblin", "golfer", "goose", "gopher", "gran", "granny", "grebe", "grocer", "grouse", "gull", "guppy", "hake", "hare", "hart", "hawk",  "hen", "heron", "hippo", "hobbit", "hog", "hornet", "horse", "hound", "human", "hunter", "hyena", "iguana", "imp", "jackal", "jaguar", "jay", "jockey", "joiner", "judge", "kid", "king", "kitten", "kiwi", "knight", "koala", "lady", "lamb", "lark", "larva", "lawyer", "leech", "lemur", "lice", "limpet", "lion", "lizard", "llama", "macaw", "maggot", "magpie", "maid", "major", "male", "mama", "mamba", "mammy", "man", "mantis", "mare", "marlin", "mason", "mayor", "medic", "men", "mice", "midget", "miller", "miner", "mink", "minnow", "model", "mole", "monger", "monk", "monkey", "moose",  "moth", "mother", "mouse", "mouth", "mule", "mullet", "mum", "mummy", "mussel", "nana", "nanny", "nephew", "newt", "niece", "nun", "nurse", "nymph", "ocelot", "orc", "osprey", "ostler", "otter",  "owl", "oxen", "oyster", "panda", "parrot", "pastor", "people", "perch", "person", "petrel", "pig", "pigeon", "pike", "pilot", "pirate", "plaice", "plover", "poet", "pony", "poodle", "pope",  "prawn", "priest", "prince", "puppy", "python", "quail", "queen", "rabbi", "rabbit", "ram", "rat", "raven", "rector", "rhino", "roach", "robber", "robin", "robot", "rook", "sailor", "saint",  "salmon", "sapper", "scampi", "scout", "scribe", "seal", "seaman", "seamen", "sexton", "shag", "shark", "sheep", "shrew", "shrimp", "singer", "sister", "skate", "skink", "skunk", "slave",  "sleuth", "sloth", "slug", "smith", "snail", "snake", "sole", "son", "spider", "sprat", "spy", "squid", "stag", "stoat", "stork", "sultan", "swan", "tailor", "tapir", "tench", "tern", "thief",  "thrush", "tiger", "tinker", "tit", "toad", "toucan", "trader", "troll", "trout", "tuna", "turbot", "turkey", "turtle", "tutor", "tycoon", "typist", "uncle", "urchin", "usher", "valet",  "verger", "vicar", "viper", "vixen", "vole", "waiter", "walrus", "warden", "wasp", "weasel", "weaver", "weevil", "welder", "wench", "whale", "whelk", "winkle", "witch", "wizard", "wolf", "woman", "wombat", "women", "worm", "wren", "writer", "yak", "yeti", "zebra" 
);
    var aNouns1 = new Array(
 "abbey", "airport", "ale", "almond", "ankle", "antler", "anvil", "apple", "arch", "arena", "arm", "arms", "army", "arrow",  "bacon", "badge", "ball", "balls", "banana", "banjo", "bank", "barge", "barley", "barn", "barrel", "basin", "basket", "beach", "beak", "beam", "bean", "bed", "beef", "beer", "beet", "bell", "belly", "belt", "bench", "berry", "bidet", "bike", "blazer", "blouse", "boat", "body", "bog", "bomb", "bones", "bongos", "boobs", "book", "boot", "boots", "booze", "bottle", "bottom", "bowl", "box", "bra", "brain", "branch", "brandy", "bread", "breast",  "bridge", "brook", "broom", "bruise", "brush", "bucket", "buckle", "bugle", "bun", "bunker", "buns", "bus", "bush", "butt", "button", "cactus", "cage", "cake", "camera", "can", "cannon", "canoe", "canyon", "cap", "cape", "car", "carpet", "carrot", "cart", "cash", "cashew", "casino", "cask", "castle", "cave", "celery", "cello", "chair", "chapel", "cheek", "cheeks", "cheese", "cherry", "chest", "chin", "chips", "church", "cider", "city", "clamp", "claw", "cliff", "cloak", "clock", "cloud", "clover", "club", "coat", "cocoon", "coffee", "coffin", "comb", "congas", "corn", "cornet", "couch", "crate", "cress", "crocus", "crops", "crotch", "cudgel", "cumin", "cup", "curry", "cycle", "dagger", "dahlia", "daisy", "desert", "desk", "dice", "dish", "disk", "dome", "door", "drain", "dress", "drill", "drum", "ear", "ears", "easel", "egg", "eggs", "elbow", "elm", "endive", "eye", "eyelid", "eyes", "face", "fangs", "farm", "feet", "fence", "fern", "fiddle", "field", "fig", "film", "finger", "fir", "fire", "flag", "flask", "floor", "flute", "food", "foot", "forest", "forge", "fork", "fruit", "fungi", "fungus", "fur", "gammon", "garage", "garden", "garlic", "gate", "gin", "girder", "glove", "gloves", "gong", "grape", "grapes", "grass", "gravy", "groin", "guitar", "gullet", "gums", "gun", "gusset", "gut", "hail", "hair", "hairs", "hall", "ham", "hammer", "hand", "handle", "harp", "hat", "hazel", "head", "heart", "hedge", "heel", "helmet", "hill", "holly", "honey", "hood", "hoof", "hook", "horn", "horns", "hose", "hostel", "hotel", "house", "hut", "island", "ivy", "jacket", "jam", "jaw", "jeans", "jelly", "jet", "jewel", "jug", "juice", "jumper", "kale", "kayak", "kebab", "kettle", "kidney", "kite", "knee", "knees", "knife", "knob", "knoll", "ladder", "lager", "lake", "lance", "larch", "lard", "lathe", "leaf", "leaves", "leek", "leg", "legs", "lemon", "lentil", "lilac", "lily", "lime", "lip", "lips", "liver", "loaf", "log", "loins", "lorry", "lungs", "lute", "lyre", "mall", "mane", "mango", "maple", "marina", "marrow", "marsh", "mask", "mat", "mead", "meadow", "meat", "melon", "melons", "meteor", "milk", "mill", "mince", "mirror", "money", "moon", "moss", "motel", "mound", "mount", "mucus", "mug", "muscle", "museum", "nails", "navel", "neck", "nest", "nettle", "nose", "nutmeg", "nuts", "oats", "oboe", "ocean", "office", "olive", "onion", "opal", "orange", "orchid", "organ", "oven", "paddle", "pagoda", "pail", "palace", "pan", "pansy", "pants", "papaya", "pasta", "pasty", "peach", "peanut", "pear", "pearl", "peas", "pen", "pencil", "pepper", "phone", "photo", "piano", "pie", "pill", "pillow", "pipe", "pizza", "plains", "plane", "planet", "plate", "pliers", "plug", "plum", "pole", "pond", "pool", "poplar", "poppy", "pork", "port", "post", "pot", "potato", "pouch", "prison", "prune", "pub", "pubes", "puddle", "purse", "radio", "radish", "rain", "raisin", "rectum", "rib", "ribbon", "ribs", "rice", "rifle", "ring", "river", "road", "robe", "rock", "rocket", "roof", "room", "root", "rope", "rose", "rowan", "ruby", "rug", "rum", "rye", "sabre", "sack", "sail", "salad", "salt", "sandal", "saucer", "saw", "sax", "scab", "scalp", "scarf", "school", "settee", "shandy", "shed", "sheet", "shelf", "shell", "shield", "shin", "ship", "shirt", "shoe", "shoes", "shop", "shore", "shorts", "shrine", "sink", "sitar", "ski", "skin", "skirt", "skull", "sled","sledge", "sleet", "sleigh", "snot", "snow", "sock", "socks", "sofa", "soup", "spear", "spine", "spoon", "spots", "sprout", "spruce", "stable", "stage", "stairs", "star", "steak", "steps", "stick", "stool", "stove", "straw", "stream", "string", "sugar", "suit", "sun", "sushi", "swamp", "sword", "table", "tail", "tank", "taxi", "tea", "teeth", "telly", "temple", "thigh", "thorax", "throat", "thumb", "tie", "toast", "toe", "toes", "toilet", "tomato", "tongs", "tongue", "tool", "tooth", "tophat", "towel", "tower", "town", "toy", "train", "tram", "tree", "truck", "tuba", "tulip", "tummy", "tundra", "turnip", "valley","vase","vest", "video", "viola", "violet", "violin", "vodka", "vomit", "wagon", "wall", "walnut", "wart", "water", "weed", "wheat", "wheel", "wheels", "whisky", "wig", "willow", "window", "wine", "wings", "wrench", "wrist", "yacht", "yam", "yew", "zither"
        );
    function getName(){

        with(document.frmGenerator){

            if (txtName.value == ""){
                var pw0 = aAdjs0[rand(aAdjs0.length-1)];
                var pw1 = aAdjs1[rand(aAdjs1.length-1)];
                var pw2 = aNouns0[rand(aNouns0.length-1)];
                var pw3 = aNouns1[rand(aNouns1.length-1)];
            } else {
                var num = 0;
                for(var i=0;i<txtName.value.length;i++){
                    if (txtName.value.charAt(i) != " "){
                        num += txtName.value.charCodeAt(i);
                    }
                }
                var pw0 = aAdjs0[num % (aAdjs0.length-1)];
                var pw1 = aAdjs1[num % (aAdjs1.length-1)];
                var pw2 = aNouns0[num % (aNouns0.length-1)];
                var pw3 = aNouns1[num % (aNouns1.length-1)];
            }

            txtPassword.value = pw0.substring(0, 1).toUpperCase() + pw0.substring(1, pw0.length) +
                    pw1.substring(0, 1).toUpperCase() + pw1.substring(1, pw1.length) +
                    pw2.substring(0, 1).toUpperCase() + pw2.substring(1, pw2.length) +
                    pw3.substring(0, 1).toUpperCase() + pw3.substring(1, pw3.length);
        }
    }

