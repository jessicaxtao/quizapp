const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const buttonGrid = document.getElementById('btn-grid');
const inputBox = document.getElementById('input');
const introText = document.getElementById('intro-text');
const introText2 = document.getElementById('intro-text-2');
const introLink = document.getElementById('intro-link');
const numCorrect = document.getElementById('numCorrect');
const correctAnswer = document.getElementById('correctAnswer');

let shuffledQuestions, index, next, correct;
const questionElement = document.getElementById('question');

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  introText.classList.add('hide');
  introText2.classList.add('hide');
  introLink.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  index = 0;
  correct = 0;
  numCorrect.classList.remove('hide');
  correctAnswer.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  event.preventDefault();
  if(index > 0) {
    next.classList.add('hide');
    buttonGrid.removeChild(next);
  }
  inputBox.value= "";
  showQuestion(shuffledQuestions[index]);
}

function showQuestion(question) {
  event.preventDefault();
  questionElement.innerText = question.question;
  next = document.createElement('button');
  next.innerText = 'Next';
  next.classList.add('btn');
  next.addEventListener('click', selectAnswer);
  buttonGrid.appendChild(next);
}

function selectAnswer() {
  event.preventDefault();
  const answer = document.querySelector('#input').value;
  let ans = answer.toUpperCase();
  if(questions[index].answers.includes(ans)) {
    correct++;
    correctAnswer.innerHTML = "CORRECT!"
  } else {
    correctAnswer.innerHTML = "The correct answer was: " + questions[index].answers[0];
  }
  numCorrect.innerHTML = "Number Correct: " + correct + " / 299";
  if(shuffledQuestions.length > index + 1) {
    index++;
    setNextQuestion();
  } else {
    alert("TOTAL NUMBER CORRECT: " + correct);
    next.classList.add('hide');
    buttonGrid.removeChild(next);
    questionContainerElement.classList.add('hide');
    startButton.classList.remove('hide');
    introText.classList.remove('hide');
    introText2.classList.remove('hide');
    introLink.classList.remove('hide');
    numCorrect.classList.add('hide');
    correctAnswer.classList.add('hide');
  }
}

const questions = [
  {
    question: 'WHAT IS THE NAME OF THE HORSE-LIKE ANIMAL WITH BLACK AND WHITE STRIPES?',
    answers: ['ZEBRA', 'ZEBRAS']
  },
  {
    question: 'WHAT IS THE NAME OF THE LONG SLEEP SOME ANIMALS GO THROUGH DURING THE ENTIRE WINTER?',
    answers: ['HIBERNATION']
  },
  {
    question: 'WHAT IS THE NAME OF THE RUBBER OBJECT THAT IS HIT BACK AND FORTH BY HOCKEY PLAYERS?',
    answers: ['PUCK', 'PUCKS']
  },
  {
    question: 'WHAT IS THE NAME OF THE REMAINS OF PLANTS AND ANIMALS THAT ARE FOUND IN STONE?',
    answers: ['FOSSIL', 'FOSSILS']
  },
  {
    question: 'WHICH PRECIOUS GEM IS RED?',
    answers: ['RUBY']
  },
  {
    question: 'WHAT IS THE NAME OF THE SEVERE HEADACHE THAT RETURNS PERIODICALLY AND OFTEN IS ACCOMPANIED BY NAUSEA?',
    answers: ['MIGRAINE', 'MIGRAINES']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “ROMEO AND JULIET”?',
    answers: ['SHAKESPEARE']
  },
  {
    question: 'WHAT IS THE NAME OF A DRIED GRAPE?',
    answers: ['RAISIN', 'RAISINS']
  },
  {
    question: 'WHAT IS THE NAME OF THE COMIC STRIP CHARACTER WHO EATS SPINACH TO INCREASE HIS STRENGTH?',
    answers: ['POPEYE']
  },
  {
    question: 'WHAT ANIMAL RUNS THE FASTEST?',
    answers: ['CHEETAH', 'CHEETAHS']
  },
  {
    question: 'WHAT IS THE NAME OF THE PROCESS BY WHICH PLANTS MAKE THEIR FOOD?',
    answers: ['PHOTOSYNTHESIS']
  },
  {
    question: 'WHAT IS THE NAME OF DOROTHY’S DOG IN “THE WIZARD OF OZ”?',
    answers: ['TOTO']
  },
  {
    question: 'WHAT IS THE NAME OF THE MOLTEN ROCK THAT RUNS DOWN THE SIDE OF A VOLCANO DURING AN ERUPTION?',
    answers: ['LAVA']
  },
  {
    question: 'WHAT WAS THE NAME OF THE SUPPOSEDLY UNSINKABLE SHIP THAT SUNK ON ITS MAIDEN VOYAGE IN 1912?',
    answers: ['TITANIC']
  },
  {
    question: 'WHICH SPORT USES THE TERMS “GUTTER” AND “ALLEY”?',
    answers: ['BOWLING']
  },
  {
    question: 'WHAT IS THE NAME OF A GIANT OCEAN WAVE CAUSED BY AN EARTHQUAKE?',
    answers: ['TSUNAMI']
  },
  {
    question: 'WHAT IS THE TERM FOR HITTING A VOLLEYBALL DOWN HARD INTO THE OPPONENT’S COURT?',
    answers: ['SPIKE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE VILLAINOUS CAPTAIN IN THE STORY “PETER PAN”?',
    answers: ['HOOK']
  },
  {
    question: 'WHAT WAS THE NAME OF TARZAN’S GIRLFRIEND?',
    answers: ['JANE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BROTHERS WHO FLEW THE FIRST AIRPLANE AT KITTY HAWK?',
    answers: ['WRIGHT']
  },
  {
    question: 'WHAT IS THE NAME FOR A MEDICAL DOCTOR WHO SPECIALIZES IN CUTTING THE BODY?',
    answers: ['SURGEON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST PERSON TO SET FOOT ON THE MOON?',
    answers: ['ARMSTRONG']
  },
  {
    question: 'WHAT IS THE CAPITAL OF FRANCE?',
    answers: ['PARIS']
  },
  {
    question: 'WHAT IS THE NAME OF THE CRIME IN WHICH A BUILDING OR PROPERTY IS PURPOSELY SET ON FIRE?',
    answers: ['ARSON']
  },
  {
    question: 'WHAT IS THE NAME OF THE SHORT PLEATED SKIRT WORN BY MEN IN SCOTLAND?',
    answers: ['KILT']
  },
  {
    question: 'WHAT IS THE NAME OF AN INABILITY TO SLEEP?',
    answers: ['INSOMNIA']
  },
  {
    question: 'WHAT IS THE NAME FOR A MEDICAL DOCTOR WHO SPECIALIZES IN DISEASES OF THE SKIN?',
    answers: ['DERMATOLOGIST', 'DERMATOLOGISTS']
  },
  {
    question: 'WHAT IS THE NAME OF THE LARGEST OCEAN ON EARTH?',
    answers: ['PACIFIC']
  },
  {
    question: 'WHAT IS THE NAME OF THE SHIP THAT CARRIED THE PILGRIMS TO AMERICA IN 1620?',
    answers: ['MAYFLOWER']
  },
  {
    question: 'WHAT IS THE NAME FOR A CYCLONE THAT OCCURS OVER LAND?',
    answers: ['TORNADO']
  },
  {
    question: 'WHICH SPORT IS ASSOCIATED WITH WIMBLEDON?',
    answers: ['TENNIS']
  },
  {
    question: 'WHAT IS THE NAME OF THE BIRD THAT CANNOT FLY AND IS THE LARGEST BIRD ON EARTH?',
    answers: ['OSTRICH', 'OSTRICHES']
  },
  {
    question: 'WHAT IS THE NAME OF THE ISLAND-CITY BELIEVED SINCE ANTIQUITY TO HAVE SUNK INTO THE OCEAN?',
    answers: ['ATLANTIS']
  },
  {
    question: 'WHAT IS THE NAME OF THE LIZARD THAT CHANGES ITS COLOR TO MATCH THE SURROUNDINGS?',
    answers: ['CHAMELEON', 'CHAMELEONS']
  },
  {
    question: 'WHAT IS THE NAME OF THE THICK LAYER OF FAT ON A WHALE?',
    answers: ['BLUBBER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BASEBALL PLAYER WHO HAD THE MOST HOME RUNS IN A SINGLE SEASON PRIOR TO 1961?',
    answers: ['RUTH']
  },
  {
    question: 'WHAT IS THE NAME OF A YOUNG SHEEP?',
    answers: ['LAMB', 'LAMBS']
  },
  {
    question: 'WHAT IS THE LARGEST PLANET IN THE SOLAR SYSTEM?',
    answers: ['JUPITER']
  },
  {
    question: 'WHAT IS THE NAME OF THE NAVIGATION INSTRUMENT USED AT SEA TO PLOT POSITION RELATIVE TO THE MAGNETIC NORTH POLE?',
    answers: ['COMPASS', 'COMPASSES']
  },
  {
    question: 'WHAT IS THE TERM IN GOLF REFERRING TO A SCORE OF ONE UNDER PAR ON A PARTICULAR HOLE?',
    answers: ['BIRDIE', 'BIRDIES']
  },
  {
    question: 'WHICH GAME USES A RUBBER BALL AND LITTLE METAL PIECES?',
    answers: ['JACKS']
  },
  {
    question: 'WHAT IS THE NAME OF A DRIED PLUM?',
    answers: ['PRUNE']
  },
  {
    question: 'IN WHICH SPORT DOES A RIDER ON HORSEBACK HIT A BALL WITH HIS MALLET?',
    answers: ['POLO']
  },
  {
    question: 'WHAT IS THE NAME OF THE LEGENDARY ONE-EYED GIANT IN GREEK MYTHOLOGY?',
    answers: ['CYCLOPS']
  },
  {
    question: 'IN WHAT PARK IS “OLD FAITHFUL” LOCATED?',
    answers: ['YELLOWSTONE']
  },
  {
    question: 'WHAT IS THE NAME OF THE POKER HAND IN WHICH ALL OF THE CARDS ARE OF THE SAME SUIT?',
    answers: ['FLUSH']
  },
  {
    question: 'IN WHICH SPORT IS THE STANLEY CUP AWARDED?',
    answers: ['HOCKEY', 'ICE HOCKEY']
  },
  {
    question: 'WHAT IS THE NAME OF THE CHAPEL WHOSE CEILING WAS PAINTED BY MICHELANGELO?',
    answers: ['SISTINE']
  },
  {
    question: 'OF WHICH COUNTRY IS BAGHDAD THE CAPITAL?',
    answers: ['IRAQ']
  },
  {
    question: 'WHAT IS THE NAME OF THE LIQUID PORTION OF WHOLE BLOOD?',
    answers: ['PLASMA']
  },
  {
    question: 'WHAT IS THE NAME OF THE CITY IN ITALY THAT IS KNOWN FOR ITS CANALS?',
    answers: ['VENICE']
  },
  {
    question: 'WHAT IS THE NAME OF THE SPEAR LIKE OBJECT THAT IS THROWN DURING A TRACK MEET?',
    answers: ['JAVELIN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO RODE HORSEBACK IN 1775 TO WARN THAT THE BRITISH WERE COMING?',
    answers: ['REVERE']
  },
  {
    question: 'WHO WAS THE EGYPTIAN QUEEN WHO JOINED FORCES WITH MARK ANTONY OF ROME?',
    answers: ['CLEOPATRA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO ASSASSINATED ABRAHAM LINCOLN?',
    answers: ['BOOTH']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO SHOWED THAT LIGHTNING IS ELECTRIC?',
    answers: ['FRANKLIN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FAMOUS MAGICIAN AND ESCAPE ARTIST WHO DIED OF APPENDICITIS?',
    answers: ['HOUDINI']
  },
  {
    question: 'WHAT IS THE NAME OF DEER MEAT?',
    answers: ['VENISON']
  },
  {
    question: 'WHAT IS THE NAME OF THE LARGE HAIRY SPIDER THAT LIVES NEAR BANANAS?',
    answers: ['TARANTULA']
  },
  {
    question: 'WHAT IS THE NAME OF THE OCEAN THAT IS LOCATED BETWEEN AFRICA AND AUSTRALIA?',
    answers: ['INDIAN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SINGER WHO RECORDED “HEARTBREAK HOTEL” AND “ALL SHOOK UP”?',
    answers: ['PRESLEY']
  },
  {
    question: 'WHAT IS THE NAME OF THE CRIME IN WHICH A PERSON PURPOSELY BETRAYS HIS COUNTRY?',
    answers: ['TREASON']
  },
  {
    question: 'WHAT IS THE NAME OF THE FIRST ARTIFICIAL SATELLITE PUT IN ORBIT BY RUSSIA IN 1957?',
    answers: ['SPUTNIK']
  },
  {
    question: 'WHAT BRAND OF CIGARETTE WAS FIRST TO HAVE THE FLIP-TOP BOX?',
    answers: ['MARLBORO']
  },
  {
    question: 'WHAT KIND OF METAL IS ASSOCIATED WITH A 50TH WEDDING ANNIVERSARY?',
    answers: ['GOLD']
  },
  {
    question: 'WHICH TYPE OF SNAKE DO ASIAN SNAKE-CHARMERS USE?',
    answers: ['COBRA']
  },
  {
    question: 'WHAT IS THE ONLY LIQUID METAL AT ROOM TEMPERATURE?',
    answers: ['MERCURY']
  },
  {
    question: 'WHAT IS THE NAME OF THE DESERT PEOPLE WHO WANDER INSTEAD OF LIVING IN ONE PLACE?',
    answers: ['NOMADS']
  },
  {
    question: 'WHAT IS THE CAPITAL OF NEW YORK?',
    answers: ['ALBANY']
  },
  {
    question: 'WHAT IS THE NAME OF THE ORGAN THAT PRODUCES INSULIN?',
    answers: ['PANCREAS']
  },
  {
    question: 'WHAT IS THE NAME OF THE COLLAR BONE?',
    answers: ['CLAVICLE']
  },
  {
    question: 'WHAT IS THE NAME OF THE EXTINCT REPTILES KNOWN AS “TERRIBLE LIZARDS”?',
    answers: ['DINOSAUR']
  },
  {
    question: 'WHAT IS THE CAPITAL OF RUSSIA?',
    answers: ['MOSCOW']
  },
  {
    question: 'WHICH BREED OF CAT HAS BLUE EYES?',
    answers: ['SIAMESE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SECOND U.S. PRESIDENT?',
    answers: ['ADAMS']
  },
  {
    question: 'WHAT IS THE NAME OF THE CONSTELLATION THAT LOOKS LIKE A FLYING HORSE?',
    answers: ['PEGASUS']
  },
  {
    question: 'WHAT IS THE NAME OF THE KIND OF CAT THAT SPOKE TO ALICE IN THE STORY “ALICE’S ADVENTURES IN WONDERLAND”?',
    answers: ['CHESHIRE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO PROPOSED THE THEORY OF RELATIVITY?',
    answers: ['EINSTEIN']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE WOMAN WHO SUPPOSEDLY DESIGNED AND SEWED THE FIRST AMERICAN FLAG?',
    answers: ['ROSS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST SIGNER OF THE “DECLARATION OF INDEPENDENCE”?',
    answers: ['HANCOCK']
  },
  {
    question: 'WHAT WAS THE NAME OF KING ARTHUR’S SWORD?',
    answers: ['EXCALIBUR']
  },
  {
    question: 'WHAT IS THE WORD THAT MEANS A NAUTICAL MILE PER HOUR?',
    answers: ['KNOT']
  },
  {
    question: 'WHAT IS THE NAME FOR THE ASTRONOMICAL BODIES THAT ENTER THE EARTH’S ATMOSPHERE?',
    answers: ['METEORS']
  },
  {
    question: 'WHAT IS THE LONGEST RIVER IN SOUTH AMERICA?',
    answers: ['AMAZON']
  },
  {
    question: 'WHAT IS THE NAME OF THE AUTOMOBILE INSTRUMENT THAT MEASURES MILEAGE?',
    answers: ['ODOMETER']
  },
  {
    question: 'WHAT ITALIAN CITY WAS DESTROYED WHEN MOUNT VESUVIUS ERUPTED IN 79 A.D.?',
    answers: ['POMPEII']
  },
  {
    question: 'WHAT IS THE LAST NAME OF BATMAN’S SECRET IDENTITY IN THE BATMAN COMICS?',
    answers: ['WAYNE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MYTHICAL GIANT LUMBERJACK?',
    answers: ['BUNYAN']
  },
  {
    question: 'WHAT IS THE NAME OF THE COMPANY THAT PRODUCES “BABY RUTH” CANDY BARS?',
    answers: ['NESTLE']
  },
  {
    question: 'WHAT IS THE NAME OF SOCRATES’ MOST FAMOUS STUDENT?',
    answers: ['PLATO']
  },
  {
    question: 'WHAT IS THE NAME OF THE THREE-LEAF CLOVER THAT IS THE EMBLEM OF IRELAND?',
    answers: ['SHAMROCK']
  },
  {
    question: 'OF WHICH COUNTRY IS BUENOS AIRES THE CAPITAL?',
    answers: ['ARGENTINA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTRESS WHO RECEIVED THE BEST ACTRESS AWARD FOR THE MOVIE “MARY POPPINS”?',
    answers: ['ANDREWS']
  },
  {
    question: 'WHAT IS THE NAME OF THE MOUNTAIN RANGE IN WHICH MOUNT EVEREST IS LOCATED?',
    answers: ['HIMALAYAS']
  },
  {
    question: 'WHAT IS THE UNIT OF SOUND INTENSITY?',
    answers: ['DECIBEL', 'DECIBLE']
  },
  {
    question: 'WHAT IS THE NAME OF THE PROJECT WHICH DEVELOPED THE ATOMIC BOMB DURING WORLD WAR II?',
    answers: ['MANHATTAN']
  },
  {
    question: 'WHAT IS THE UNIT OF ELECTRICAL POWER THAT REFERS TO A CURRENT OF ONE AMPERE AT ONE VOLT?',
    answers: ['WATT']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR OF THE BOOK “1984”?',
    answers: ['ORWELL']
  },
  {
    question: 'IN WHICH GAME ARE MEN CROWNED?',
    answers: ['CHECKERS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO ASSASSINATED PRESIDENT JOHN F. KENNEDY?',
    answers: ['OSWALD']
  },
  {
    question: 'WHAT IS THE NAME OF BATMAN’S BUTLER?',
    answers: ['ALFRED']
  },
  {
    question: 'WHICH COUNTRY WAS THE FIRST TO USE GUNPOWDER?',
    answers: ['CHINA']
  },
  {
    question: 'WHAT IS THE NAME OF AN AIRPLANE WITHOUT AN ENGINE?',
    answers: ['GLIDER', 'GLIDERS']
  },
  {
    question: 'WHAT IS THE NAME OF THE NORTH STAR?',
    answers: ['POLARIS']
  },
  {
    question: 'WHAT IS THE ONLY WORD THAT THE RAVEN SAYS IN EDGAR ALLEN POE’S POEM “THE RAVEN”?',
    answers: ['NEVERMORE']
  },
  {
    question: 'FOR WHICH COUNTRY IS THE YEN THE MONETARY UNIT?',
    answers: ['JAPAN']
  },
  {
    question: 'IN WHAT EUROPEAN CITY IS THE PARTHENON LOCATED?',
    answers: ['ATHENS']
  },
  {
    question: 'WHAT IS THE NAME OF THE FURRY ANIMAL THAT ATTACKS COBRA SNAKES?',
    answers: ['MONGOOSE', 'MONGEESE']
  },
  {
    question: 'FOR WHICH COUNTRY IS THE RUPEE THE MONETARY UNIT?',
    answers: ['INDIA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO FIRST STUDIED GENETIC INHERITANCE IN PLANTS?',
    answers: ['MENDEL']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WROTE THE “STAR SPANGLED BANNER”?',
    answers: ['KEY']
  },
  {
    question: 'WHAT IS THE NAME OF THE PALACE IN LONDON IN WHICH THE MONARCH OF ENGLAND RESIDES?',
    answers: ['BUCKINGHAM']
  },
  {
    question: 'IN WHICH GAME ARE THE STANDARD PIECES OF STAUNTON DESIGN?',
    answers: ['CHESS']
  },
  {
    question: 'WHAT ARE PEOPLE WHO MAKE MAPS CALLED?',
    answers: ['CARTOGRAPHER', 'CARTOGRAPHERS']
  },
  {
    question: 'WHAT WAS THE NAME OF THE ZEPPELIN THAT EXPLODED IN LAKEHURST N.J. IN 1937?',
    answers: ['HINDENBURG']
  },
  {
    question: 'WHAT IS THE PALACE BUILT IN FRANCE BY KING LOUIS XIV?',
    answers: ['VERSAILLES', 'VERSAILLE']
  },
  {
    question: 'IN WHICH CITY IS THE U.S. NAVAL ACADEMY LOCATED?',
    answers: ['ANNAPOLIS']
  },
  {
    question: 'WHAT IS THE NAME OF THE LIGHTEST WOOD KNOWN?',
    answers: ['BALSA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BOXER WHO LATER BECAME KNOWN AS MUHAMMAD ALI?',
    answers: ['CLAY']
  },
  {
    question: 'WHAT ISLAND IS THE LARGEST IN THE WORLD EXCLUDING AUSTRALIA?',
    answers: ['GREENLAND']
  },
  {
    question: 'WHAT IS THE NAME OF THE SMALL JAPANESE STOVE USED FOR OUTDOOR COOKING?',
    answers: ['HIBACHI']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE WOMAN WHO BEGAN THE PROFESSION OF NURSING?',
    answers: ['NIGHTINGALE']
  },
  {
    question: 'WHO WAS THE LEADER OF THE ARGONAUTS?',
    answers: ['JASON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ARTIST WHO PAINTED “GUERNICA”?',
    answers: ['PICASSO']
  },
  {
    question: 'IN WHAT ANCIENT CITY WERE THE “HANGING GARDENS” LOCATED?',
    answers: ['BABYLON']
  },
  {
    question: 'WHAT ARE PEOPLE CALLED WHO EXPLORE CAVES?',
    answers: ['SPELUNKERS']
  },
  {
    question: 'WHAT IS THE NAME OF THE CAPTAIN OF THE PEQUOD IN THE BOOK “MOBY DICK”?',
    answers: ['AHAB']
  },
  {
    question: 'WHAT IS THE CAPITAL OF KENTUCKY?',
    answers: ['FRANKFORT']
  },
  {
    question: 'WHAT IS THE NAME OF AN ILLEGAL MOVE BY A BASEBALL PITCHER THAT RESULTS IN ALL RUNNERS ADVANCING ONE BASE?',
    answers: ['BALK']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AMERICAN WHO STARRED IN THE 1936 OLYMPICS?',
    answers: ['OWENS']
  },
  {
    question: 'THE DEEPEST PART OF THE OCEAN IS LOCATED AT WHICH TRENCH?',
    answers: ['MARIANA']
  },
  {
    question: 'WHICH SPORT USES THE TERMS “STONES” AND “BROOMS”?',
    answers: ['CURLING']
  },
  {
    question: 'WHAT IS THE PROPER NAME FOR A BADMINTON BIRD?',
    answers: ['SHUTTLECOCK']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “OLIVER TWIST”?',
    answers: ['DICKENS', 'DICKINS']
  },
  {
    question: 'WHAT IS THE CAPITAL OF DELAWARE?',
    answers: ['DOVER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO INVENTED THE PHONOGRAPH?',
    answers: ['EDISON']
  },
  {
    question: 'IN WHICH TYPE OF SKI RACE DOES THE DOWNHILL SKIER MAKE SHARP TURNS AROUND POLES',
    answers: ['SLALOM']
  },
  {
    question: 'IN WHICH CITY IS HEATHROW AIRPORT LOCATED?',
    answers: ['LONDON']
  },
  {
    question: 'WHAT IS THE CAPITAL OF JAMAICA?',
    answers: ['KINGSTON']
  },
  {
    question: 'WHICH PLANET WAS THE LAST TO BE DISCOVERED?',
    answers: ['NEPTUNE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “THE MURDERS IN THE RUE MORGUE”?',
    answers: ['POE']
  },
  {
    question: 'WHAT IS THE NAME OF THE SHIP ON WHICH CHARLES DARWIN MADE HIS SCIENTIFIC VOYAGE?',
    answers: ['BEAGLE']
  },
  {
    question: 'WHAT IS THE CAPITAL OF CHILE?',
    answers: ['SANTIAGO']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “THE OLD MAN AND THE SEA”?',
    answers: ['HEMINGWAY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WROTE “CANTERBURY TALES”?',
    answers: ['CHAUCER']
  },
  {
    question: 'WHAT IS THE NAME OF THE FOUNTAIN IN ROME INTO WHICH COINS ARE THROWN FOR GOOD LUCK?',
    answers: ['TREVI']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE MAN WHO WAS PRESIDENT DIRECTLY AFTER JAMES MADISON?',
    answers: ['MONROE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ASTRONOMER WHO PUBLISHED IN 1543 HIS THEORY THAT THE EARTH REVOLVES AROUND THE SUN?',
    answers: ['COPERNICUS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE CRIMINAL WHO WAS KNOWN AS “SCARFACE”?',
    answers: ['CAPONE']
  },
  {
    question: 'WHAT IS THE NAME OF THE LONE RANGER’S INDIAN SIDEKICK?',
    answers: ['TONTO']
  },
  {
    question: 'WHAT IS THE CAPITAL OF DENMARK?',
    answers: ['COPENHAGEN']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE MAN WHO WAS THE RADIO BROADCASTER FOR THE “WAR OF THE WORLDS”?',
    answers: ['WELLES']
  },
  {
    question: 'IN WHICH CITY IS MICHELANGELO’S STATUE OF DAVID LOCATED?',
    answers: ['FLORENCE']
  },
  {
    question: 'WHAT WAS FRANK LLOYD WRIGHT’S PROFESSION?',
    answers: ['ARCHITECT']
  },
  {
    question: 'OF WHICH COUNTRY IS NAIROBI THE CAPITAL?',
    answers: ['KENYA']
  },
  {
    question: 'WHAT IS THE NAME OF THE HILLBILLY FAMILY THAT HAD A FAMOUS FEUD WITH THE MCCOY FAMILY?',
    answers: ['HATFIELD']
  },
  {
    question: 'WHAT KIND OF POISON DID SOCRATES TAKE AS HIS EXECUTION?',
    answers: ['HEMLOCK']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST PERSON TO COMPLETE A SOLO FLIGHT ACROSS THE ATLANTIC OCEAN?',
    answers: ['LINDBERGH']
  },
  {
    question: 'ANDY GRIFFITH WAS THE SHERIFF OF WHAT TOWN ON TELEVISION’S “ANDY GRIFFITH SHOW”?',
    answers: ['MAYBERRY']
  },
  {
    question: 'WHAT IS THE NAME OF THE ROMAN EMPEROR WHO FIDDLED WHILE ROME BURNED?',
    answers: ['NERO']
  },
  {
    question: 'WHAT IS THE CITY IN WHICH THE BASEBALL HALL OF FAME IS LOCATED?',
    answers: ['COOPERSTOWN']
  },
  {
    question: 'WHAT IS THE NAME OF THE UNIT OF MEASURE THAT REFERS TO A SIX-FOOT DEPTH OF WATER?',
    answers: ['FATHOM']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SCIENTIST WHO DISCOVERED RADIUM?',
    answers: ['CURIE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “BRAVE NEW WORLD”?',
    answers: ['HUXLEY']
  },
  {
    question: 'IN ADDITION TO THE KENTUCKY DERBY AND THE BELMONT STAKES WHAT HORSE RACE COMPRISES THE TRIPLE CROWN?',
    answers: ['PREAKNESS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE CRIMINAL WHO WAS KILLED BY FBI AGENTS OUTSIDE OF A CHICAGO MOVIE THEATER?',
    answers: ['DILLINGER']
  },
  {
    question: 'WHAT IS THE NAME OF THE SINGER WHO POPULARIZED A DANCE KNOWN AS THE “TWIST”?',
    answers: ['CHECKER']
  },
  {
    question: 'OVER WHICH RIVER IS THE GEORGE WASHINGTON BRIDGE?',
    answers: ['HUDSON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO INVENTED DYNAMITE?',
    answers: ['NOBEL']
  },
  {
    question: 'WHAT IS THE NAME OF THE CHINESE RELIGION FOUNDED BY LAO TSE?',
    answers: ['TAOISM', 'DAOISM']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE COMMANDER WHO LOST THE BATTLE OF THE LITTLE BIGHORN RIVER?',
    answers: ['CUSTER']
  },
  {
    question: 'WHAT IS THE NAME OF THE NAVIGATION INSTRUMENT USED AT SEA TO PLOT POSITION BY THE STARS?',
    answers: ['SEXTANT']
  },
  {
    question: 'WHO WAS THE MOST FAMOUS GREEK DOCTOR?',
    answers: ['HIPPOCRATES']
  },
  {
    question: 'IN WHICH CITY DOES THE COTTON BOWL TAKE PLACE?',
    answers: ['DALLAS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE THE SHERLOCK HOLMES STORIES?',
    answers: ['DOYLE']
  },
  {
    question: 'FOR WHICH COUNTRY IS THE DRACHMA THE MONETARY UNIT?',
    answers: ['GREECE']
  },
  {
    question: 'WHAT IS THE NAME OF THE MANSION IN VIRGINIA THAT WAS THOMAS JEFFERSON’S HOME?',
    answers: ['MONTICELLO']
  },
  {
    question: 'WHAT IS THE LONGEST RIVER IN ASIA?',
    answers: ['YANGTZE', 'YANGZI']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTOR WHO RECEIVED THE BEST ACTOR AWARD FOR THE MOVIE “ON THE WATERFRONT”?',
    answers: ['BRANDO']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MALE STAR OF THE MOVIE “CASABLANCA”?',
    answers: ['BOGART']
  },
  {
    question: 'OF WHICH COUNTRY IS BUDAPEST THE CAPITAL?',
    answers: ['HUNGARY']
  },
  {
    question: 'WHO IS KNOWN AS “THE FATHER OF GEOMETRY”?',
    answers: ['EUCLID']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE HUSBAND-WIFE SPIES WHO WERE ELECTROCUTED IN 1951 FOR PASSING ATOMIC SECRETS TO RUSSIA?',
    answers: ['ROSENBERG']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE COMPOSER WHO WROTE THE OPERA “DON GIOVANNI”?',
    answers: ['MOZART']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR OF THE JAMES BOND NOVELS?',
    answers: ['FLEMING']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF BUFFALO BILL?',
    answers: ['CODY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE UNDER THE PSEUDONYM OF MARK TWAIN?',
    answers: ['CLEMENS']
  },
  {
    question: 'WHAT IS THE NAME OF THE ISLAND ON WHICH NAPOLEON WAS BORN?',
    answers: ['CORSICA', 'CORSE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE DOCTOR WHO FIRST DEVELOPED A VACCINE AGAINST POLIO?',
    answers: ['SALK']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO BEGAN THE REFORMATION IN GERMANY?',
    answers: ['LUTHER']
  },
  {
    question: 'WHAT IS THE CAPITAL OF FINLAND?',
    answers: ['HELSINKI']
  },
  {
    question: 'WHAT WAS THE NAME OF THE APOLLO LUNAR MODULE THAT LANDED THE FIRST MAN ON THE MOON?',
    answers: ['EAGLE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE COSMONAUT WHO WAS THE FIRST PERSON TO ORBIT AROUND THE EARTH?',
    answers: ['GAGARIN']
  },
  {
    question: 'WHAT WAS THE NAME OF ROY ROGER’S DOG?',
    answers: ['BULLET']
  },
  {
    question: 'WHAT WAS THE NAME OF ALEXANDER GRAHAM BELL’S ASSISTANT?',
    answers: ['WATSON']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE COMPOSER OF THE “MAPLE LEAF RAG”?',
    answers: ['JOPLIN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE PLAYWRIGHT WHO WROTE “A STREETCAR NAMED DESIRE”?',
    answers: ['WILLIAMS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR OF “LITTLE WOMEN”?',
    answers: ['ALCOTT']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST PERSON TO CLIMB MOUNT EVEREST?',
    answers: ['HILLARY', 'HILARY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTOR WHO PLAYED RHETT BUTLER IN “GONE WITH THE WIND”?',
    answers: ['GABLE']
  },
  {
    question: 'IN WHICH COUNTRY IS ANGEL FALLS LOCATED?',
    answers: ['VENEZUELA']
  },
  {
    question: 'WHAT IS THE CAPITAL OF CANADA?',
    answers: ['OTTAWA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE TWENTY-FIRST U.S. PRESIDENT?',
    answers: ['ARTHUR']
  },
  {
    question: 'WHAT WAS THE NAME OF THE GOLDFISH IN THE STORY OF PINOCCHIO?',
    answers: ['CLEO']
  },
  {
    question: 'WHAT IS THE NAME OF THE VILLAINOUS PEOPLE WHO LIVED UNDERGROUND IN H. G. WELLS’S BOOK “THE TIME MACHINE”?',
    answers: ['MORLOCKS', 'MORLOCK']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE CHARACTER PORTRAYED BY ROBERT STACK ON THE TELEVISION SHOW “THE UNTOUCHABLES”?',
    answers: ['NESS']
  },
  {
    question: 'WHAT IS THE CAPITAL OF AUSTRALIA?',
    answers: ['CANBERRA']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ARTIST WHO PAINTED “THE PERSISTENCE OF MEMORY”?',
    answers: ['DALI']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO INVENTED THE TELEGRAPH?',
    answers: ['MORSE']
  },
  {
    question: 'WHAT IS THE NAME OF THE RIVER ON WHICH BONN IS LOCATED?',
    answers: ['RHINE']
  },
  {
    question: 'WHAT IS THE NAME OF THE SUBSTANCE DERIVED FROM A WHALE THAT IS USED TO MAKE PERFUME?',
    answers: ['AMBERGRIS']
  },
  {
    question: 'WHAT IS THE NAME OF THE SUBMARINE IN JULES VERNE’S “20,000 LEAGUES BENEATH THE SEA”?',
    answers: ['NAUTILUS']
  },
  {
    question: 'WHAT WAS THE NAME OF THE CLOWN ON THE “HOWDY DOODY” TELEVISION SHOW?',
    answers: ['CLARABELL']
  },
  {
    question: 'WHAT IS THE LAST NAME OF DAGWOOD’S BOSS IN THE COMIC STRIP “BLONDIE”?',
    answers: ['DITHERS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MOVIE ACTOR WHO PORTRAYED SPARTACUS?',
    answers: ['DOUGLAS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE WOMAN WHO FOUNDED THE AMERICAN RED CROSS?',
    answers: ['BARTON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE UNION GENERAL WHO DEFEATED THE CONFEDERATE ARMY AT THE CIVIL WAR BATTLE OF GETTYSBURG?',
    answers: ['MEADE']
  },
  {
    question: 'WHAT IS THE NAME OF THE AVENUE THAT IMMEDIATELY FOLLOWS ATLANTIC AVENUE IN THE GAME OF MONOPOLY?',
    answers: ['VENTNOR']
  },
  {
    question: 'WHICH GAME USES A DOUBLING CUBE?',
    answers: ['BACKGAMMON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO SUPPOSEDLY KILLED JESSE JAMES?',
    answers: ['FORD']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE EUROPEAN AUTHOR WHO WROTE “THE TRIAL”?',
    answers: ['KAFKA']
  },
  {
    question: 'THE GENERAL NAMED HANNIBAL WAS FROM WHAT CITY?',
    answers: ['CARTHAGE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BRITISH ADMIRAL WHO WON THE BATTLE OF TRAFALGAR?',
    answers: ['NELSON']
  },
  {
    question: 'WHAT IS THE NAME OF THE INDIAN COLLEGE IN PENNSYLVANIA FOR WHICH JIM THORPE PLAYED FOOTBALL?',
    answers: ['CARLISLE']
  },
  {
    question: 'WHAT IS THE NAME OF THE PLAY IN WHICH ELWOOD P. DOWD IS A CHARACTER?',
    answers: ['HARVEY']
  },
  {
    question: 'WHAT FAMOUS KNOT DID ALEXANDER THE GREAT UNDO?',
    answers: ['GORDIAN', 'GORDAN']
  },
  {
    question: 'WHAT WAS THE NAME OF THE UNSUCCESSFUL AUTO THAT WAS MANUFACTURED BY THE FORD MOTOR COMPANY FROM 1957–1959?',
    answers: ['EDSEL']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SONG WRITER WHO WROTE THE SONG “I LOVE PARIS”?',
    answers: ['PORTER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST AMERICAN AUTHOR TO WIN THE NOBEL PRIZE FOR LITERATURE?',
    answers: ['LEWIS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE INVENTOR OF THE WIRELESS RADIO?',
    answers: ['MARCONI']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ARTIST WHO PAINTED “AMERICAN GOTHIC”?',
    answers: ['WOOD']
  },
  {
    question: 'IN WHAT PROFESSION WAS EMMETT KELLY?',
    answers: ['CLOWN']
  },
  {
    question: 'WHAT IS THE NAME OF THE RIVER THAT RUNS THROUGH ROME?',
    answers: ['TIBER', 'TIBERIS', 'TEVERE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE POET WHO ORIGINALLY WROTE “DON JUAN”?',
    answers: ['BYRON']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FRENCH AUTHOR WHO WROTE “THE STRANGER”?',
    answers: ['CAMUS']
  },
  {
    question: 'WHO WAS THE FIRST RULER OF THE HOLY ROMAN EMPIRE?',
    answers: ['CHARLEMAGNE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO IS REGARDED AS THE NATIONAL POET OF SCOTLAND?',
    answers: ['BURNS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FOOTBALL PLAYER KNOWN AS “THE GALLOPING GHOST”?',
    answers: ['GRANGE']
  },
  {
    question: 'WHAT IS THE NAME OF ROY ROGERS’ HORSE?',
    answers: ['TRIGGER']
  },
  {
    question: 'WHAT WAS THE NAME OF THE NUCLEAR SUBMARINE THAT SUNK IN THE ATLANTIC IN 1963?',
    answers: ['THRESHER']
  },
  {
    question: 'WHAT IS THE NAME OF THE MAN WHO REMOVED THE THORN FROM THE LION’S PAW IN THE STORY FROM AESOP’S FABLES?',
    answers: ['ANDROCLES']
  },
  {
    question: 'WHAT IS THE NAME OF THE BRIGHTEST STAR IN THE SKY EXCLUDING THE SUN?',
    answers: ['SIRIUS']
  },
  {
    question: 'WHAT IS THE NAME OF THE LAND OF THE GIANTS IN “GULLIVER’S TRAVELS”?',
    answers: ['BROBDINGNAG']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE FEMALE STAR OF THE MOVIE “CASABLANCA”?',
    answers: ['BERGMAN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTOR KNOWN AS “THE MAN OF A THOUSAND FACES”?',
    answers: ['CHANEY']
  },
  {
    question: 'WHAT IS THE NAME OF THE BASEBALL PLAYER WITH THE HIGHEST LIFETIME BATTING AVERAGE IN THE MAJOR LEAGUES?',
    answers: ['COBB']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE ACTOR IN THE ROLE OF PERRY MASON ON TELEVISION?',
    answers: ['BURR']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MOST POPULAR PIN-UP GIRL OF WORLD WAR II?',
    answers: ['GRABLE']
  },
  {
    question: 'WHAT IS THE NAME OF THE LARGEST DESERT ON EARTH?',
    answers: ['ANTARCTICA', 'ANTARTICA', 'ANTARCTIC', 'ANTARTIC']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE JOCKEY WITH THE MOST LIFETIME WINNERS IN HORSE RACING?',
    answers: ['BAZE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WAS THE VOICE OF MR. MAGOO?',
    answers: ['BACKUS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTOR WHO PORTRAYED SERGEANT FRIDAY ON “DRAGNET”?',
    answers: ['WEBB']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE ACTOR WHO PORTRAYED THE FATHER ON THE TELEVISION SHOW “FATHER KNOWS BEST”?',
    answers: ['YOUNG']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE VENTRILOQUIST WHO PROVIDED THE VOICE FOR CHARLIE MCCARTHY?',
    answers: ['BERGEN']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE CAPTAIN OF THE BRITISH SHIP “BOUNTY” WHEN THE MUTINY OCCURRED?',
    answers: ['BLIGH']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE INVENTOR OF THE STEAMBOAT “CLERMONT”?',
    answers: ['FULTON']
  },
  {
    question: 'WHAT IS THE NAME OF GERMANY’S LARGEST BATTLESHIP THAT WAS SUNK IN WORLD WAR II?',
    answers: ['BISMARCK']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE JUDGE WHO WAS KNOWN AS “THE LAW WEST OF THE PECOS”?',
    answers: ['BEAN']
  },
  {
    question: 'WHAT IS JOHN KENNETH GALBRAITH’S PROFESSION?',
    answers: ['ECONOMIST']
  },
  {
    question: 'WHAT WAS THE NAME OF THE UNION IRONCLAD SHIP THAT FOUGHT THE CONFEDERATE IRONCLAD MERRIMACK?',
    answers: ['MONITOR']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE DOCTOR WHO PERFORMED THE FIRST SUCCESSFUL HUMAN HEART TRANSPLANT?',
    answers: ['BARNARD']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO SAID “I ONLY REGRET THAT I HAVE BUT ONE LIFE TO LOSE FOR MY COUNTRY”?',
    answers: ['HALE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE PILOT OF THE U-2 SPY PLANE SHOT DOWN OVER RUSSIA IN 1960?',
    answers: ['POWERS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE ACTOR WHO PORTRAYED THE SHERIFF IN THE MOVIE “HIGH NOON”?',
    answers: ['COOPER']
  },
  {
    question: 'WHAT IS THE NAME OF THE MOUNTAIN RANGE THAT SEPARATES ASIA FROM EUROPE?',
    answers: ['URAL']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BOXER WHO WAS KNOWN AS THE “MANASSA MAULER”?',
    answers: ['DEMPSEY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO CREATED THE COMIC STRIP “LI’L ABNER”?',
    answers: ['CAPP']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BASEBALL PLAYER WHO PITCHED A PERFECT GAME IN THE 1956 WORLD SERIES?',
    answers: ['LARSEN']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST MAN TO RUN THE MILE IN UNDER FOUR MINUTES?',
    answers: ['BANNISTER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR WHO WROTE “BROTHERS KARAMAZOV”?',
    answers: ['DOSTOEVSKY', 'DOSTOYEVSKY', 'DOSTOYEVSKI']
  },
  {
    question: 'WHAT IS THE NAME OF THE AUTHOR WHO RECEIVED A PULITZER PRIZE FOR HIS WRITINGS ABOUT ABRAHAM LINCOLN?',
    answers: ['SANDBURG']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO CREATED THE COMIC STRIP “WOODY WOODPECKER”?',
    answers: ['LANTZ']
  },
  {
    question: 'WHAT IS THE NAME OF THE INSTRUMENT USED TO MEASURE WIND SPEED?',
    answers: ['ANEMOMETER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR OF “OUR TOWN”?',
    answers: ['WILDER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SINGER WHO MADE A HIT RECORDING OF THE SONG “WHO’S SORRY NOW”?',
    answers: ['FRANCIS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE CUBAN LEADER THAT CASTRO OVERTHREW?',
    answers: ['BATISTA']
  },
  {
    question: 'WHAT IS THE NAME OF THE RUBBER ROLLER ON A TYPEWRITER?',
    answers: ['PLATEN']
  },
  {
    question: 'WHAT WAS THE NAME OF THE LARGEST CONFEDERATE MILITARY PRISON DURING THE CIVIL WAR?',
    answers: ['ANDERSONVILLE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE AUTHOR OF “THE AGONY AND THE ECSTASY”?',
    answers: ['STONE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF FLASH’S GIRLFRIEND IN THE COMIC STRIP “FLASH GORDON”?',
    answers: ['ARDEN']
  },
  {
    question: 'WHAT IS THE NAME OF THE FIRST MOVIE TO RECEIVE THE ACADEMY AWARD FOR BEST PICTURE?',
    answers: ['WINGS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE DISCOVERER OF THE VACCINATION FOR SMALLPOX?',
    answers: ['JENNER']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BOY IN THE BOOK “TREASURE ISLAND”?',
    answers: ['HAWKINS']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE BOXER WHO WON THE BOXING TITLE FROM JOHN L. SULLIVAN?',
    answers: ['CORBETT']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WROTE THE SONG “HOW DEEP IS THE OCEAN”?',
    answers: ['BERLIN']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF BILLY THE KID?',
    answers: ['BONNEY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE SINGER WHOSE THEME SONG WAS “WHEN THE BLUE OF THE NIGHT MEETS THE GOLD OF THE DAY”?',
    answers: ['CROSBY']
  },
  {
    question: 'FROM WHAT MUSICAL IS THE SONG “BAUBLES BANGLES AND BEADS”?',
    answers: ['KISMET']
  },
  {
    question: 'WHAT WAS THE LAST NAME OF THE ACTOR WHO PORTRAYED DR. WATSON IN THE SHERLOCK HOLMES SERIES?',
    answers: ['BRUCE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WAS MOST RESPONSIBLE FOR PHOTOGRAPHING THE U.S. CIVIL WAR?',
    answers: ['BRADY']
  },
  {
    question: 'WHAT IS THE NAME OF A NUMBER TWO WOOD IN GOLF?',
    answers: ['BRASSIE']
  },
  {
    question: '	WHAT IS THE LAST NAME OF THE POET WHO WROTE THE LINE “INTO EACH LIFE A LITTLE RAIN MUST FALL”?',
    answers: ['LONGFELLOW']
  },
  {
    question: 'WHAT WAS THE NAME OF GENE AUTRY’S HORSE?',
    answers: ['CHAMPION']
  },
  {
    question: 'WHAT IS THE NAME OF THE TOWN THROUGH WHICH LADY GODIVA SUPPOSEDLY MADE HER FAMOUS RIDE?',
    answers: ['COVENTRY']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST WOMAN TO SWIM ACROSS THE ENGLISH CHANNEL?',
    answers: ['EDERLE']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE FIRST FLIER TO FLY SOLO AROUND THE WORLD?',
    answers: ['POST']
  },
  {
    question: 'WHAT IS THE LAST NAME OF THE MAN WHO WROTE THE POEM “IT COULDN’T BE DONE”?',
    answers: ['GUEST']
  },
  {
    question: 'WHO WAS THE RACEHORSE OF THE YEAR FOR MANY SUCCESSIVE YEARS IN THE 1960S?',
    answers: ['KELSO']
  },
  {
    question: 'WHAT IS THE HIGHEST MOUNTAIN IN SOUTH AMERICA?',
    answers: ['ACONCAGUA']
  }
];
