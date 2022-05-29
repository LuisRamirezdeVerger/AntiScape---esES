const inquirer = require("inquirer");
const colors = require("colors");
const qstns = require("./qstns");
const { Character } = require("./class");
const items = require("./objects");
// const tutorial = require("./rooms/tutorial");
//ANDALUUUUU!!!

let game;

const inventory = [];
let lights = false;

const init = () => {
  console.log(
    //*La nuera que llama a la suegra* 
    //-Nuera: Suegra! Tu desía' que ca' vé que mi hijo se cagara ensima tenía que limpiarlo, porque soy su madre, ¿verdá? 
    //-Suegra: Sí, aro, pa' eso semo' la madre
    //Nuera: Po' vente corriendo que tu hijo s'a pega'o la cogorsa de su vida y me tiene el baño comiito mierda
`Bienvenidos a "AntiScape"! Este juego es una aventura grafica, para una experiencia mejorada, se recomienda leer TODO minuciosamente, posiblemente tengas la respuesta en el texto. 
 El reto del juego es encontra el comando programado, cuando cometas un fallo, revisa la palabra, lee el texto de nuevo o encuentra un sinonimo!`.red
  );
  console.log(`In the game you'll see text in different text colors, every color has a meaning, here you have all of them: `);
  console.log(`Cuando avanzas`.red);
  console.log(`Cuando te habla "er colega"(Ahora lo entenderas))`.blue);
  console.log(`Si necesitas realizar una accion`.green);
  console.log(`Texto general`.white.bold);
  console.log(`Esto es... Bueno, ya lo veras, si lo sabes todo, no disfrutas!! :P`.magenta);
  console.log(`Este juego no cuenta con "guardado", por lo tanto, si no puedes completarlo de una vez, necesitaras empezar de nuevo!(Aunque podras hacer "SpeedRun")
  Ahora ya sabes todo lo que necesitas, recuerda leer con atencion y disfrutar!!`.black.bgWhite);
  console.log("");

  //change after "=>" to run game properly
  inquirer.prompt(qstns.tutorial).then(() => intro());
};

const intro = () => {
  inquirer
    .prompt(qstns.prologe)
    .then((answers) => {
      game = new Character(answers.charnombre);
      console.log(
        //RECUERDA PONER EL INVENTARIO
        `- Extraño: De acuerdo ${game.nombre},
Voy a sacarte de aqui. Por lo que he escuchado, no hay persona viva que haya logrado escapar, pero confio.
simplemente ten cuidado con lo que piensas, hay algo vivo alli dentro. Seguramente sere capaz de ayudarte, sigue mis consejos!`
          .blue
      );
      console.log(
        "Empecemos por lo basico. Si quieres escapar, tendras que pensar (escribir) tu siguiente movimiento. Esa es la parte 'facil', he escuchado que tendras diferentes pruebas en cada habitacion"
          .blue
      );
      console.log(
        `Si estas teniendo problemas para completar el reto, pide "ayuda"!`.blue
      );
    })
    .then(() => room0());
};

const room0 = () => {
  console.log("Estas en lo que parece ser la entrada principal".white.bold);

  inquirer.prompt(qstns.room00).then((answer) => {
    if (answer.room00 === "ayuda") {
      console.log(
        "Escuchas una voz en tu cabeza... -Extraño: Hey! Puedes oirme? Te lo dije, te ayudare tanto como pueda! In order to escape from wherever you are, usa acciones (escribelas) que piensas que podrias hacer en ese momento. Escribe como si estuvieras buscando en Google (por ejemplo, si quieres abrir la puerta, el comando correcto seria <abrir puerta>. Intenta con <mirar alrededor>!"
      .blue);
      room0();
    } else if (answer.room00 === "usar llave") {
      if (inventory.includes("key") == true) {
        console.log(
          "-Extraño: Bien hecho! Ahora deberias ser capaz de escapar de esta habitacion"
            .red
        );
        inventory.splice("key");
        room0();
        } else {
          console.log("Probablemente necesites una llave para desbloquear la puerta...")
          room0();
        }
      }else if (answer.room00 === "abrir puerta") {
        if (inventory.includes("key") == true) {
          console.log(
            "-Extraño: Tienes una llave, usala!"
              .red
          );
          room0();
        } else {
        console.log("En el momento que tocas el pomo de la puerta, el edificio completo empieza a temblar y todo se vuelve oscuro, de repente, un flash cegador aparece ante tus ojos..."
        .red
        );
        room1();
      }
    } else if (answer.room00 === "inventario") {
      console.table(inventory);
      room0();
    } else if (answer.room00 === "mirar ventana") {
      console.log("No logras ver nada a traves de las ventanas, estan tintadas");
      room0();
    } else if (answer.room00 === "Recoger llave") {
      inventory.push("key");
      console.log("Recoges la llave del suelo".red);
      room0();
    } else if (answer.room00 === "mirar alrededor") {
      console.log(
        "Miras alrededor y... bueno... No hay mucho que ver, estas en una pequeña habitacion cuadrada con 3 ventanas, una llave en el suelo y la puerta cerrada"
      );
      room0();
    } else if (answer.room00 === "mirar ventana") {
      console.log(
        "No ves un car*jo! Visualizas vagamente la silueta de tu amiguito"
      );
      room0();
    } else if (answer.room00 === "saltar") {
      console.log("Has saltado! Que es un juego sin saltar, verdad?");
      room0();
    } else {
      console.log("Comando invalido, checkea la palabra, busca un sinonimo o piensa diferente!");
      room0();
    }
  });
};

const room1 = () => {
  //console.log("You are in a room full of pictures.".white.bold);

  inquirer.prompt(qstns.room01).then((answer) => {
    if (answer.room01 === "ayuda") {
      console.log(
        "-Extraño: Arghhh! It's been a lot since I don't ayuda somebody, can't remember the code, but I remember it had 4 digits, mirar alrededor! You may be "
      );
      room1();
    } else if (answer.room01 === "inventario") {
      console.table(inventory);
      room1();
    } else if (answer.room01 === "abrir puerta") {
      inquirer
        .prompt([
          {
            nombre: "advice",
            message:
              "Cuando miras la puerta, te das cuenta de que la puerta esta completamente nueva y sellada, ademas ves un panel de acceso con teclado numerico."
                .red,
          },
          {
            type: "input",
            nombre: "code1",
            message: `Bienvenido ${game.nombre}. Introduzca el codigo:`,
          },
        ])
        .then((respuesta) => {
          if (respuesta.code1 == 1001) {
            console.log("Acceso autorizado, puedes continuar... Por ahora...".red);
            room2();
          } else {
            console.log("Error, intentalo de nuevo");
            room1();
          }
        });
    } else if (answer.room01 === "mirar alrededor") {
      console.log(
        "Todo esta polvoriento... Estas en una habitacion mas amplia. Puedes observar varias pinturas siniestras boca abajo apoyadas en el suelo, una cama oxidada, una mesa rota con una bandeja donde hay comida con aspecto delicioso, una TV colgada en la pared que sorprendentemente esta funcionando y una puerta al fondo del habitaculo"
      );
      room1();
    } else if (answer.room01 === "saltar") {
      console.log("Has saltado! Que es un juego sin saltar, verdad?");
      room1();
    } else if (answer.room01 === "eat food") {
      console.log(
        "COMO TE ATREVES A COMERTE MIIIIIIII COMIDA? SABIA QUE NO MERECIAS LA PENA!".magenta
          .bold
      );
      console.log(
        "Despues de escuchar la voz, empiezas a encontrarte mal, tras 9 segundos, sientes un dolor de cabeza insoportable. Escuchas un estruendo producido por la TV, para tu desgracia, en la TV te ves a ti mismo sangrando por cada poro de tu cuerpo..."
      );
      console.log("Has muerto...".black.bgRed);
    } else if (answer.room01 === "mirar cama") {
      console.log(
        `-Extraño: En que estas pensando, ${game.nombre}? No es el momento de descansar!`
      );
      room1();
    } else if (answer.room01 === "mirar mesa") {
      console.log(
        "Extraño: Creeme, humano, ni pienses en comerte la comida..."
      );
      room1();
    } else if (answer.room01 === "mirar tv") {
      console.log(
        "Cuando alzas la mirada a la tv, esta se enciende sola. Parece que estan las noticias..:*Bzz* ...odo el planeta esta en ruin...*bzz*!! *bzz* 1001 demonios han surgido del nucleo de la tie...*bzz*, han quemado 1001 edificios de La Resistencia y han proclamado que La Tierra sera cenizas en 1001 a... *bzzzz* ... FAVOR AYUDA!"
      );
      room1();
    } else {
      console.log("Comando invalido, checkea la palabra, busca un sinonimo o piensa diferente!");
      room1();
    }
  });
};

const room2 = () => {
  // console.log(
  //   "<<it'll be a room full of fire needing to stop it to be able to mirar alrededor"
  // );
  inquirer.prompt(qstns.room02).then((answer) => {
    if (answer.room02 === "abrir puerta") {
      if (inventory.includes(items.iceGun)) {
        console.log(items.iceGun);
        room2();
      } else {
        console.log(
          "The puerta is on fire! You'll burn yourself if you try to abrir that puerta"
        );
        room2();
      } 
    } else if (answer.room02 === "inventory") {
      console.table(inventory);
      room2();
    } else if (answer.room02 === "ayuda") {
      console.log(
        "-Extraño: The puerta is on fire! Think how you could stop a fire from an old tek lab, you may be able to take few stuff, but don't say a word!"
      );
      room2();
    } else if (answer.room02 === "mirar alrededor") {
      console.log(
        "You are inside of an old lab, everything is clean and white, there's a shelf, a huge ice cub and the puerta on fire"
      );
      room2();
    } else if (answer.room02 === "look shelf") {
      console.log(
        "In the shelf you see a lot of broken glasses and a gau... Wait, what? *cof* You see a completely normal and regular gauntlet imbueded on flames"
      );
      room2();
    } else if (answer.room02 === "take gauntlet") {
      inventory.push(items.fireGauntlet);
      console.log(
        "Carefull, is hot, well... is not! You take the gauntlet with no harm"
      );
      room2();
    } else if (answer.room02 === "look ice cub") {
      console.log(
        "Yup, that's a huge ice cube. Looks like there's something inside..."
      );
      room2();
    } else if (answer.room01 === "saltar") {
      console.log("You saltared! What's a game without saltaring, right?");
      room2();
    } else if (answer.room02 === "shoot ice gun") {
      console.log(
        "When you pull the trigger of your little friend, you start hearing a magic loading sound coming from the gun, after 3 seconds, the gun blast completely the puerta with ice"
      );
      inventory.slice(items.iceGun);
      console.log(
        "-Extraño: Woah! You... You made it! How's is this POSSIBLE?!?! *ehem...* Wel.. Well doneee! I knew you were able to do it!"
      );
      room3();
    } else if (answer.room02 === "melt ice cube") {
      if (inventory.includes(items.fireGauntlet)) {
        console.log(
          "When you get the hand close enough to start melting the ice, the flames embrace the ice by themselves and melt it in 18 seconds.  "
        );
        console.log(
          "Now you have the a gun! But it doesn't look like an ordinary gun, is a gun made by ice, frozen enough to hold the fire from the gauntlet"
        );
        inventory.push(items.iceGun);
      } else {
        console.log(
          "You'll need a big fire to melt that before you die by hunger..."
        );
      }
      room2();
    } else {
      console.log("You can think better! Check your spelling");
      room2();
    }
  });
};

const room3 = () => {

  
  console.log(
    "And now you can... Well, you're doing great, so there's no need to ayuda you anymore... Don't worry, I'll repeat this any time you fail. Good luck :)"
  );
  inquirer.prompt(qstns.room03).then((answer) => {
    if (answer.room03 === "abrir puerta") {
      if (inventory.includes(items.antiToxicMask)) {
        console.log("-Extraño: WHAAAAAT? NOOOOOOOOOOOO! You were not suposed to pass!! I brainwashed you when you died for the same reason! Why would you think you're not able to remember anything?! This is not over yet (nombre), IS NOT OVEEEEEER!");
        console.log("While your fake friend was yelling at you because of his failure, you started to feel better than never in your life... Or death?")
        gameOver();
      } else {
        console.log(
          "What do you think it'll happen to you doing that..."
        );
        console.log("After inhaling the toxic air, you faint...")
      } 
    } else if (answer.room03 === "saltar") {
      lights = true;
      // Think on moving the whole room to another file just to have everything tidy...
      console.log("You saltared! What's a game without saltaring, right?");
      console.log("After you saltared, the pressure plate was activated, and slowly, all lights started to switch on");
      room3();
    } else if (answer.room03 === "inventory") {
      console.table(inventory);
      room3();
    } else if (answer.room03 === "ayuda") {
      if(lights == false){
        console.log("-Extraño: If you want to continue, you'll need some light... Wait, is that a pressure plate under your feet? Put some pressure!!")
        room3();
      } else {
        console.log(
        "-Extraño: No no no, you don't need me... Well, okay, if you insist... I've seen that chamber, you'll need an AntiToxic mask, but at this rate, you may need to craft it"
      );
      room3();
    }
      
    } else if (answer.room03 === "mirar alrededor") {
      if (lights == false){
         console.log(
        "Everything is dark, lights are off"
      );
      } else {
        console.log("- Extraño: Woah! This place is a mess! Looks like it's been years since someone clean up this room. ");
        console.log(" You're in a wasted room, you can see dirty spots all over the floor, also, a bit more conserved, a desk with a computer and a green potion, a closet, a small library and the puerta inside of a chamber")
      }
     
      room3();
      //edit here!
    } else if (answer.room03 === "look closet") {
      console.log(
        "In the closet there are a lab coat with a pocket and a mask"
      );
      room3();
    } else if (answer.room03 === "inspect pocket") {
      console.log(
        "When you introduce your hand in the pocket, feels empty, but when you look at your hand, you realize that you're holding the softest piece of cotton you ever touch"
      );
      console.log("-Extraño: Ohh! I missed that feeling, the best Antitoxic cotton with a touch of heaven...");
      inventory.push(items.cotton);
      room3();
    } else if (answer.room03 === "take mask") {
      inventory.push(items.toxicMask);
      console.log(
        `Oh yeah, that was a "high quality" mask, looks like is missing a piece... I guess you can not use it yet...`
      );
      room3();
    } else if (answer.room03 === "look chamber") {
      console.log(
        "-Extraño: That chamber is full of a green air, not suspicious at all, problably... Nothing bad... *gulp*"
      );
      room3();
    } else if (answer.room03 === "look library") {
      console.log(
        "You can see a few books about poisoning and toxicity"
      );
      room3();
    } else if (answer.room03 === "read poisoning book") {
      console.log(
        "[...] Whatever you do, NEVER trust on green, there are many reason, for example, [...] "
      );
      console.log("-Extraño: Ahh... Such a good memories reading that book... All you need is GREEN! Right?");
      room3();
    } else if (answer.room03 === "read toxicity book") {
      console.log(
        "[...] After 27 tests, it's well known how cotton clean the toxicity of the green air thanks to [...] "
      );
      console.log("-Extraño: When did that book arrive there? It wasn't the last time I checked it...");
      room3();
    } else if (answer.room03 === "craft antitoxic mask") {
      if (inventory.includes(items.cotton) && inventory.includes(items.toxicMask)) {
        inventory.splice(items.cotton && items.toxicMask);
        inventory.push(items.antiToxicMask);
        console.log(
          "Thanks to your knowledge, you are able to craft an... AntiToxic Mask!"
        );
        console.log(
          "-Extraño: That was... Unexpected... Go.. Good J.. Job... I guess..."
        );

      } else {
        console.log(
          "Have you got all the items in your inventory?"
        );
      }
      room3();
    } else if (answer.room03 === "look desk") {
      console.log(
        "The desk is pretty dirty and rusty, the computer seems to work, and the potion is inside of a cilindric phial, shinning with the best green you could imagine."
      );
      console.log("-Extraño: When did that book arrive there? It wasn't the last time I checked it...");
      room3();
    } else if (answer.room03 === "drink potion") {
      console.log(
        "-Extraño: Hahaha... Haha... HAHAHAHAHA!!"
      );
      console.log("You foot start to weight way to much, you can't move at all... Every milisecond you feel how your blood start to get thicker, after 1.8 seconds, you became a statue...");
      console.log("You may need some knowledge for the next time...");
    } else if (answer.room03 === "look computer") {
      inquirer
        .prompt([
          {
            nombre: "advice",
            message:
              "The computer is working perfectly, you'll need the password"
                .green,
          },
          {
            type: "input",
            nombre: "code1",
            message: `Welcome ${game.nombre}, Enter password: .... REMINDER: "In letters, hexadecimal or multiple of the numbers encountered, `,
          },
        ])
        .then((respuesta) => {
          if (respuesta.code1 == "nine") {
            console.log("Password correct!".red);
            easterEgg();
          } else {
            console.log("Error, try again".white.bgWhite);
            room3();
            //We can kill here as well
          }
        });
    } else {
      console.log("You can think better! Check your spelling");
      room3();
    }
  });
};

const easterEgg = () => {
  console.log("WTF are you doing?? Well played! Hope it was a bit challenging, just a bit! In here you'll get nothing to finish this room, but you did it! You found the easterEgg hided in this game.");
  console.log("If you're curious about why the number 9, it's 'cause the coder encounter this number way many times in his childhood, thinking that the number was following him while it was (unconsciously)all the opposite(lmao).");
  console.log("And now that you're here, all I've to say is THANKS! Thanks for playing this far, as a creator, all I want is you to finish and enjoy the game ^^");
  console.log("Okay, okay, okay, I'm feeling softhearted. The key to finish this room is in");
  console.log("FATAL ERROR: 404 NOT FOUND. Powering off...".blue);
  room3();
}

const gameOver = () => {
  console.log("This is the end, if you're reading this, my apologies, this still in beta, next time you'll have a proper ending. Big Love from Spain: Antiheroe")
}
init();
