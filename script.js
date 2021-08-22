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
 "baked", "bald", "bare", "big", "boiled", "brawny", "broad", "broken", "bumpy", "burly", "burnt",  "chubby", "chunky", "clean", "crispy", "crusty", "curly", "damp", "dark", "dead",
 "dirty", "drab", "droopy", "dry", "dusty", "dwarf", "elfin", "fat", "filthy", "flabby", "flaky", "flat", "fluffy", "foamy", "foggy", "fried", "frozen",  "gaudy", "giant",  "grassy", "greasy", 
 "hairy", "huge", "jagged", "large", "little", "long", "lumpy", "meaty", "mega", "messy", "minced", "mini", "misty", "moist", "mouldy", "mucky", "muddy", "murky", "mushy", "naked", "narrow",
 "petite", "nude", "old", "pretty", "puny", "regal", "roast", "rough", "royal", "rusty", "saggy", "scabby", "shiny", "short", "sick", "sickly", "skinny", "slim", "slimy", "sloppy", "small", 
 "smooth", "snotty", "soggy", "spiky", "spiny", "spotty", "sticky", "stout", "stripy", "tall", "thick", "thin", "tiny", "ugly", "vast", "watery", "wavy", "wet", "wide", "young",
        );

    var aAdjs1 = new Array(
"amber", "azure", "bamboo", "beige", "black", "blonde", "blue", "bone", "bony", "brass", "brick", "bronze", "brown", "canvas", "cerise", "cheese", "cheesy", "chrome", "clay", "cloth", 
"copper", "cork", "cotton", "cream", "cyan", "denim", "ebony", "flax", "flaxen", "flint", "fur", "furry", "ginger", "glass", "gold", "golden", "green", "grey", "ice", "iced", "icy", 
"indigo", "iron", "ivory", "jade", "khaki", "lace", "lacy", "lead", "lilac", "linen", "maroon", "mauve", "metal", "midget", "milky", "mossy", "nickel", "nylon", "oak", "orange", "paper", 
"pewter", "pine", "pink", "purple", "quartz", "red", "rock", "rocky", "rubber", "ruby", "sandy", "sepia", "shell", "silk", "silken", "silky", "silver", "slate",  "snow", "snowy", "sponge", 
"spongy", "steel", "stone", "stony", "straw", "suede", "tan", "tin", "tinny", "velvet", "violet", "wax", "waxy", "white", "wire", "wiry", "wood", "wooden", "wool", "woolly", "yellow", "zinc" 
);

    var aNouns = new Array(
"abbey", "abbot", "actor", "adder", "adult", "airman", "airport", "ale", "almond", "angel", "angler", "ankle", "ant", "antler", "anvil", "ape", "apple", "arch", "archer", "arena", "arm", "arms", "army", "arrow", "artist", "ash", "ass", "aunt", "auntie", "author", "babies", "baboon", "baby", "bacon", "badge", "badger", "baker", "ball", "balls", "banana", "banjo", "bank", "banker", "barber", "bard", "barge", "barley", "barn", "baron", "barrel", "basin", "basket", "bass", "bat", "beach", "beagle", "beak", "beam", "bean", "bear", "beard", "beaver", "bed", "bee", "beech", "beef", "beer", "beet", "beetle", "beggar", "bell", "belly", "belt", "bench", "berry", "bidet", "bike", "birch", "bird", "bishop", "bison", "bitch", "blazer", "bloke", "blouse", "boar", "boat", "body", "bog", "bomb", "bones", "bongos", "boobs", "book", "boot", "boots", "booze", "bottle", "bottom", "bowl", "box", "boxer", "boy", "bra", "brain", "branch", "brandy", "bread", "bream", "breast", "brewer", "bridge", "broker", "brook", "broom", "bruise", "brush", "buck", "bucket", "buckle", "budgie", "bugle", "bull", "bun", "bunker", "bunny", "buns", "bus", "bush", "busker", "butler", "butt", "button", "cactus", "cage", "cake", "calf", "camel", "camera", "can", "canary", "cannon", "canoe", "canyon", "cap", "cape", "car", "carp", "carpet", "carrot", "cart", "cash", "cashew", "casino", "cask", "castle", "cat", "cave", "celery", "cello", "chair", "chapel", "cheek", "cheeks", "cheese", "chef", "cherry", "chest", "chick", "chief", "child", "chimp", "chin", "chips", "chub", "church", "cider", "city", "clam", "clamp", "claw", "cliff", "cloak", "clock", "cloud", "clover", "clown", "club", "coat", "cobra", "cock", "cockle", "cocoon", "cod", "coffee", "coffin", "collie", "comb", "congas", "cook", "corgi", "cork", "corn", "cornet", "couch", "cougar", "count", "cow", "cowboy", "coyote", "crab", "crab", "crane", "crate", "cress", "crocus", "crops", "crotch", "crow", "cub", "cuckoo", "cudgel", "cumin", "cup", "curry", "cycle", "dad", "daddy", "dagger", "dahlia", "daisy", "dancer", "deacon", "deer", "deer", "demon", "deputy", "desert", "desk", "devil", "dice", "dish", "disk", "diver", "doctor", "dodo", "doe", "dog", "dome", "donkey", "door", "dove", "dragon", "drain", "drake", "dress", "drill", "driver", "drum", "drummer", "duck", "dugong", "duke", "dwarf", "eagle", "ear", "earl", "ears", "earwig", "easel", "eel", "egg", "eggs", "elbow", "elf", "elk", "elm", "emu", "endive", "eye", "eyelid", "eyes", "face", "fairy", "falcon", "fangs", "farm", "farmer", "father", "feet", "female", "fence", "fern", "ferret", "fiddle", "field", "fig", "film", "finch", "finger", "fir", "fire", "fish", "flag", "flask", "flea", "floor", "flower", "flute", "fly", "foal", "food", "foot", "forest", "forge", "fork", "fox", "friar", "frog", "fruit", "fungi", "fungus", "gammon", "garage", "garden", "garlic", "gate", "geese", "geisha", "gent", "gerbil", "ghost", "giant", "gibbon", "gigolo", "gin", "girder", "girl", "glove", "gloves", "gnome", "goat", "goblin", "golfer", "gong", "goose", "gopher", "gran", "granny", "grape", "grapes", "grass", "gravy", "grebe", "grocer", "groin", "grouse", "guitar", "gull", "gullet", "gums", "gun", "guppy", "gusset", "gut", "hail", "hair", "hairs", "hake", "hall", "ham", "hammer", "hand", "handle", "hare", "harp", "hart", "hat", "hawk", "hazel", "head", "heart", "hedge", "heel", "helmet", "hen", "heron", "hill", "hippo", "hobbit", "hog", "holly", "honey", "hood", "hoof", "hook", "horn", "horn", "hornet", "horse", "hose", "hostel", "hotel", "hound", "house", "human", "hunter", "hut", "hyena", "iguana", "imp", "island", "ivy", "jackal", "jacket", "jaguar", "jam", "jaw", "jay", "jeans", "jelly", "jet", "jewel", "jockey", "joiner", "judge", "jug", "juice", "jumper", "kale", "kayak", "kebab", "kettle", "kid", "kidney", "king", "kite", "kitten", "kiwi", "knee", "knees", "knife", "knight", "knob", "knoll", "koala", "ladder", "lady", "lager", "lake", "lamb", "lance", "larch", "lard", "lark", "larva", "lathe", "lawyer", "leaf", "leaves", "leech", "leek", "leg", "legs", "lemon", "lemur", "lentil", "lice", "lilac", "lily", "lime", "limpet", "lion", "lip", "lips", "liver", "lizard", "llama", "loaf", "log", "loins", "lorry", "lungs", "lute", "lyre", "macaw", "maggot", "magpie", "maid", "major", "male", "mall", "mama", "mamba", "mammy", "man", "mane", "mango", "mantis", "maple", "mare", "marina", "marlin", "marrow", "marsh", "mask", "mason", "mat", "mayor", "mead", "meadow", "meat", "medic", "melon", "melons", "men", "meteor", "mice", "midget", "milk", "mill", "miller", "mince", "miner", "mink", "minnow", "mirror", "model", "mole", "money", "monger", "monk", "monkey", "moon", "moose", "moss", "motel", "moth", "mother", "mound", "mount", "mouse", "mouth", "mucus", "mug", "mule", "mullet", "mum", "mummy", "muscle", "museum", "mussel", "nails", "nana", "nanny", "navel", "neck", "nephew", "nest", "nettle", "newt", "niece", "nose", "nun", "nurse", "nutmeg", "nuts", "nymph", "oak", "oats", "oboe", "ocean", "ocelot", "office", "olive", "onion", "opal", "orange", "orc", "orchid", "organ", "osprey", "ostler", "otter", "oven", "owl", "oxen", "oyster", "paddle", "pagoda", "pail", "palace", "pan", "panda", "pansy", "pants", "papaya", "parrot", "pasta", "pastor", "pasty", "peach", "peanut", "pear", "pearl", "peas", "pen", "pencil", "people", "pepper", "perch", "person", "petrel", "phone", "photo", "piano", "pie", "pig", "pigeon", "pike", "pill", "pillow", "pilot", "pine", "pipe", "pirate", "pizza", "plaice", "plains", "plane", "planet", "plate", "pliers", "plover", "plug", "plum", "poet", "pole", "pond", "pony", "poodle", "pool", "pope", "poplar", "poppy", "pork", "port", "post", "pot", "potato", "pouch", "prawn", "priest", "prince", "prison", "prune", "pub", "pubes", "puddle", "puppy", "purse", "python", "quail", "queen", "rabbi", "rabbit", "radio", "radish", "rain", "raisin", "ram", "rat", "raven", "rector", "rectum", "rhino", "rib", "ribbon", "ribs", "rice", "rifle", "ring", "river", "roach", "road", "robber", "robe", "robin", "robot", "rock", "rocket", "roof", "rook", "room", "root", "rope", "rose", "rowan", "ruby", "rug", "rum", "rye", "sabre", "sack", "sail", "sailor", "saint", "salad", "salmon", "salt", "sandal", "sapper", "saucer", "saw", "sax", "scab", "scalp", "scampi", "scarf", "school", "scout", "scribe", "seal", "seaman", "seamen", "settee", "sexton", "shag", "shandy", "shark", "shed", "sheep", "sheet", "shelf", "shield", "shin", "ship", "shirt", "shoe", "shoes", "shop", "shore", "shorts", "shrew", "shrimp", "shrine", "singer", "sink", "sister", "sitar", "skate", "ski", "skin", "skink", "skirt", "skull", "skunk", "slave", "sled", "sledge", "sleet", "sleigh", "sleuth", "sloth", "slug", "smith", "snail", "snake", "snot", "snow", "sock", "socks", "sofa", "sole", "son", "soup", "spear", "spider", "spine", "spoon", "spots", "sprat", "sprout", "spruce", "spy", "squid", "stable", "stag", "stage", "stairs", "star", "steak", "steps", "stick", "stoat", "stone", "stool", "stork", "stove", "straw", "stream", "string", "sugar", "suit", "sultan", "sun", "sushi", "swamp", "swan", "sword", "table", "tail", "tailor", "tank", "tapir", "taxi", "tea", "teeth", "telly", "temple", "tench", "tern", "thief", "thigh", "thorax", "throat", "thrush", "thumb", "tie", "tiger", "tinker", "tit", "tits", "toad", "toast", "toe", "toes", "toilet", "tomato", "tongs", "tongue", "tool", "tooth", "tophat", "toucan", "towel", "tower", "town", "toy", "trader", "train", "tram", "tree", "troll", "trout", "truck", "tuba", "tulip", "tummy", "tuna", "tundra", "turbot", "turkey", "turnip", "turtle", "tutor", "tycoon", "typist", "uncle", "urchin", "usher", "valet", "valley", "vase", "verger", "vest", "vicar", "video", "viola", "violet", "violin", "viper", "vixen", "vodka", "vole", "vomit", "wagon", "waiter", "wall", "walnut", "walrus", "warden", "wart", "wasp", "water", "weasel", "weaver", "weed", "weevil", "welder", "wench", "whale", "wheat", "wheel", "wheels", "whelk", "whisky", "wig", "willow", "window", "wine", "wings", "winkle", "witch", "wizard", "wolf", "woman", "wombat", "women", "worm", "wren", "wrench", "wrist", "writer", "yacht", "yak", "yam", "yeti", "yew", "zebra", "zither" 
);

    function getName(){

        with(document.frmGenerator){

            if (txtName.value == ""){
                var pw0 = aAdjs0[rand(aAdjs0.length-1)];
                var pw1 = aAdjs1[rand(aAdjs1.length-1)];
                var pw2 = aNouns[rand(aNouns.length-1)];
            } else {
                var num = 0;
                for(var i=0;i<txtName.value.length;i++){
                    if (txtName.value.charAt(i) != " "){
                        num += txtName.value.charCodeAt(i);
                    }
                }
                var pw0 = aAdjs0[num % (aAdjs0.length-1)];
                var pw1 = aAdjs1[num % (aAdjs1.length-1)];
                var pw2 = aNouns[num % (aNouns.length-1)];
            }

            txtPassword.value = pw0.substring(0, 1).toUpperCase() + pw0.substring(1, pw0.length) +
                    pw1.substring(0, 1).toUpperCase() + pw1.substring(1, pw1.length) +
                    pw2.substring(0, 1).toUpperCase() + pw2.substring(1, pw2.length);
        }
    }

