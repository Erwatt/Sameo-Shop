import coca from '../Images/coca.jpg';
import fanta from '../Images/fanta.jpg';
import champagne from '../Images/champagne.jpg';
import mignardise from '../Images/assiette-mignardises.jpg';
import biereTriple from '../Images/biere-triple.jpg';
import biereBlanche from '../Images/biere-blanche.jpg';
import cafeGourmand from '../Images/cafe-gourmand.jpg';
import theGourmand from '../Images/the-gourmand.jpg';
import citronade from '../Images/Citronade.jpg';
import maiTai from '../Images/MaïTaï.jpg';
import mojito from '../Images/Mojito.jpg';
import pinaColada from '../Images/PiñaColada.jpg';
import cocaZero from '../Images/CocaZero.jpg';
import iceTea from '../Images/IceTea.jpg';
import perrier from '../Images/Perrier.jpg';
import jusAbricot from '../Images/JusAbricot.jpg';
import cafe from '../Images/Cafe.jpg';
import capuccino from '../Images/Capuccino.jpg';
import chocolatChaud from '../Images/ChocolatChaud.jpg';
import jusOrange from '../Images/JusOrange.jpg';
import the from '../Images/The.jpg';
import massage from '../Images/Massage.jpg';
import eau from '../Images/eau.jpg';
import Maison2 from '../Images/Maison2.jpg';
import Maison4 from '../Images/Maison4.jpg';
import Grignot from '../Images/Grignot.JPG';
import Grignotplus from '../Images/Grignotplus.JPG';
import Charcutfrom from '../Images/Charcutfrom.JPG';
import Sexonthebeach from '../Images/Sex on the beach.jpg';
import Bierecuvee from '../Images/biere-cuvee-du-moment.jpg';
import Biereambree from '../Images/biere-ambree.jpg';
import Biereblonde from '../Images/biere-blonde.jpg';
import whiskycoca from '../Images/Whisky Coca.jpg';
import Aperol from '../Images/Aperol.jpg';

export const ItemList = [
    {
        id: 'xyz',
        name: 'Eau',
        category: 'Soft',
        price: 0.00,
        cover: eau
    },
    {
        id: 'abc',
        name: 'Coca',
        category: 'Soft',
        price: 2.00,
        cover: coca
    },
    {
        id: 'def',
        name: 'Coca zero',
        category: 'Soft',
        price: 2.00,
        cover: cocaZero
    },
    {
        id: 'ghi',
        name: 'Ice Tea',
        category: 'Soft',
        price: 2.00,
        cover: iceTea
    },
    {
        id: 'uvw',
        name: "Fanta",
        category: 'Soft',
        price: 2.00,
        cover: fanta
    },
    {
        id: 'zab',
        name: 'Eau Gazeuse',
        category: 'Soft',
        price: 2.00,
        cover: perrier
    },
    {
        id: 'cde',
        name: "Jus d'Abricot",
        category: 'Soft',
        price: 2.50,
        cover: jusAbricot
    },
    {
        id: 'ijk',
        name: "Jus d'Orange pressées",
        category: 'Soft',
        price: 4.00,
        cover: jusOrange
    },
    {
        id: 'lmn',
        name: "Citronnade Maison",
        category: "Soft",
        price: 4.00,
        cover: citronade
    },
    {
        id: 'jkl',
        name: 'Champagne',
        category: 'Champagnes',
        price: 49.00,
        cover: champagne
    },
    {
        id: 'pqr',
        name: 'Saint-Amand Triple',
        category: 'Bière',
        price: 5.00,
        cover: biereTriple
    },
    // {
    //     id: 'stu',
    //     name: 'Saint-Amand Blanche',
    //     category: 'Bière',
    //     price: 5.00,
    //     cover: biereBlanche
    // },
    {
        id: 'vwx',
        name: 'Café gourmand',
        category: 'Pause goûter',
        price: 8.00,
        cover: cafeGourmand
    },
    {
        id: 'yza',
        name: 'Thé gourmand',
        category: 'Pause goûter',
        price: 8.00,
        cover: theGourmand
    },
    {
        id: 'mno',
        name: 'Plateau goûter',
        category: 'Pause goûter',
        price: 6.00,
        cover: mignardise
    },
    {
        id: 'bcd',
        name: 'Expresso',
        category: 'Boissons Chaudes',
        price: 2.00,
        cover: cafe
    },
    {
        id: 'wxy',
        name: 'Double Expresso',
        category: 'Boissons Chaudes',
        price: 3.50,
        cover: cafe
    },
    {
        id: 'efg',
        name: 'Chocolat Chaud',
        category: 'Boissons Chaudes',
        price: 3.00,
        cover: chocolatChaud
    },
    {
        id: 'hij',
        name: 'Thé',
        category: 'Boissons Chaudes',
        price: 2.00,
        cover: the
    },
    {
        id: 'klm',
        name: 'Capuccino',
        category: 'Boissons Chaudes',
        price: 3.50,
        cover: capuccino
    },
    // {
    //     id: 'nop',
    //     name: 'Mojito 🍸',
    //     category: 'Cocktail',
    //     price: 8.90,
    //     cover: mojito
    // },
    {
        id: 'qrs',
        name: 'Maï Taï 🍸',
        category: 'Cocktail',
        price: 8.90,
        cover: maiTai
    },
    {
        id: 'tuv',
        name: 'Piña Colada 🍸',
        category: 'Cocktail',
        price: 8.90,
        cover: pinaColada
    },
    {
        id: 'fgh',
        name: 'Tiny Blue',
        alcoholFree: true,
        category: 'Cocktail Sans Alcool',
        price: 4.00,
        cover: coca
    },
    // {
    //     id: 'opq',
    //     name: "Massage solo 30'",
    //     category: "Prestations",
    //     price: 35.00,
    //     cover: massage
    // },
    // {
    //     id: 'rst',
    //     name: "Massage duo 30'",
    //     category: "Prestations",
    //     price: 70.00,
    //     cover: massage
    // },
    {
        id: '1',
        name: "Demi champagne",
        category: "Champagnes",
        price: 29.00,
        cover: champagne
    }
    ,
    {
        id: 'val101',
        name: "Grignot'",
        category: "Pause Apéro",
        price: 4.00,
        cover: Grignot
    }
    ,
    {
        id: 'val102',
        name: "Grignot' plus pour 2",
        category: "Pause Apéro",
        price: 9.00,
        cover: Grignotplus
    }
    ,
    {
        id: 'val103',
        name: "Grignot' plus pour 4",
        category: "Pause Apéro",
        price: 15.00,
        cover: Grignotplus
    }
    ,
    {
        id: 'val104',
        name: "Charcut' & Fromage pour 2",
        category: "Pause Apéro",
        price: 11.00,
        cover: Charcutfrom
    }
    ,
    {
        id: 'val105',
        name: "Charcut' & Fromage pour 4",
        category: "Pause Apéro",
        price: 17.00,
        cover: Charcutfrom
    }
    ,
    {
        id: 'val106',
        name: "Fais Maison pour 2",
        category: "Pause Apéro",
        price: 5.50,
        cover: Maison2
    }
    ,
    {
        id: 'val107',
        name: "Fais Maison pour 4",
        category: "Pause Apéro",
        price: 9.00,
        cover: Maison4
    }
    ,
    {
        id: 'val108',
        name: "Whisky Coca 🍸",
        category: "Cocktail",
        price: 7.00,
        cover: whiskycoca
    }
    ,
    {
        id: 'val109',
        name: 'Saint-Amand Ambrée',
        category: 'Bière',
        price: 5.00,
        cover: Biereambree
    }
    ,
    {
        id: 'val110',
        name: 'Saint-Amand Blonde',
        category: 'Bière',
        price: 5.00,
        cover: Biereblonde
    }
    ,
    {
        id: 'val111',
        name: 'Saint-Amand Cuvée du Moment',
        category: 'Bière',
        price: 5.00,
        cover: Bierecuvee
    }
    ,
    {
        id: 'val112',
        name: "Sex on the Beach 🍸",
        category: "Cocktail",
        price: 8.90,
        cover: Sexonthebeach
    }
    ,
    {
        id: 'val11"',
        name: "Aperol 🍸",
        category: "Cocktail",
        price: 7.00,
        cover: Aperol
    }
]