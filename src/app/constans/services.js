import Services1Image from "../assets/services/services1.png";
import Services2Image from "../assets/services/services2.png";
import Services3Image from "../assets/services/services3.png";

import TreePlantingImage from "../assets/services/treePlanting.svg";
import GrassCuttingImage from "../assets/services/grassCutting.svg";
import GardenDesignImage from "../assets/services/gardenDesign.svg";
import FlowerScapingImage from "../assets/services/flowerScaping.svg";
import BranchCuttingImage from "../assets/services/branchCutting.svg";
import PestsWeedsControlImage from "../assets/services/pestsWeedsControl.svg";
import PlantGrowingImage from "../assets/services/plantGrowing.svg";
import WateringIrrigationImage from "../assets/services/wateringIrrigation.svg";

export const services = [
  {
    name: "Tree Planting",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "tree-planting", // Zmieniono src na param i usunięto prefiks
    icon: <TreePlantingImage />,
    about: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices saen, nec tincidunt nunc posuere ut.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices saen, nec tincidunt nunc posuere ut.",
    ],
    adventages: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices 
sapien, nec tincidunt nunc posuere ut. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
galley of type and scrambled it to make a type specimen book. 
`,
      `
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    ],
    mainImageUrl: Services1Image.src,
    images: [Services2Image.src, Services3Image.src],
  },
  {
    name: "Grass Cutting",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "grass-cutting", // Zmieniono src na param i usunięto prefiks
    icon: <GrassCuttingImage />,
    about: [
      "Grass cutting helps maintain a neat and healthy lawn, promoting growth and preventing weeds.",
      "Regular grass cutting ensures your lawn remains healthy and aesthetically pleasing.",
    ],
    adventages: [
      "Enhances the appearance of the lawn.",
      "Promotes healthy growth by trimming excess grass.",
      "Reduces the risk of pests by maintaining lawn health.",
    ],
    mainImageUrl: Services2Image.src,
    images: [Services3Image.src],
  },
  {
    name: "Garden Design",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "garden-design", // Zmieniono src na param i usunięto prefiks
    icon: <GardenDesignImage />,
    about: [
      "Garden design involves planning and creating aesthetically pleasing outdoor spaces.",
      "A well-designed garden can improve the beauty and value of your property.",
    ],
    adventages: [
      "Creates a beautiful and functional outdoor space.",
      "Increases property value.",
      "Personalizes your garden to match your style and needs.",
    ],
    mainImageUrl: Services3Image.src,
    images: [Services1Image.src],
  },
  {
    name: "Plant Growing",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "plant-growing", // Zmieniono src na param i usunięto prefiks
    icon: <PlantGrowingImage />,
    about: [
      "Plant growing services ensure that plants are cultivated properly, ensuring healthy growth.",
      "We provide expert care for plants, from seedling to maturity.",
    ],
    adventages: [
      "Ensures healthy plant growth.",
      "Provides expert care for different plant species.",
      "Improves garden and landscape aesthetics.",
    ],
    mainImageUrl: Services1Image.src,
    images: [Services2Image.src],
  },
  {
    name: "Flower Scaping",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "flower-scaping", // Zmieniono src na param i usunięto prefiks
    icon: <FlowerScapingImage />,
    about: [
      "Flower scaping involves arranging flowers to create visually stunning garden areas.",
      "Proper flower scaping can transform any garden into a vibrant and colorful space.",
    ],
    adventages: [
      "Adds vibrant colors to your garden.",
      "Improves the overall aesthetics of your garden.",
      "Attracts pollinators like bees and butterflies.",
    ],
    mainImageUrl: Services2Image.src,
    images: [Services3Image.src],
  },
  {
    name: "Branch Cutting",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "branch-cutting", // Zmieniono src na param i usunięto prefiks
    icon: <BranchCuttingImage />,
    about: [
      "Branch cutting helps in maintaining tree health and preventing potential hazards.",
      "Regular branch cutting keeps trees healthy and reduces the risk of falling branches.",
    ],
    adventages: [
      "Prevents potential hazards from overgrown branches.",
      "Promotes healthy tree growth.",
      "Enhances the appearance of trees.",
    ],
    mainImageUrl: Services3Image.src,
    images: [Services1Image.src],
  },
  {
    name: "Pests, Weeds Control",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "pests-weeds-control", // Zmieniono src na param i usunięto prefiks
    icon: <PestsWeedsControlImage />,
    about: [
      "Pest and weed control services help in keeping your garden healthy and pest-free.",
      "We use safe and effective methods to eliminate pests and prevent weed growth.",
    ],
    adventages: [
      "Maintains garden health by eliminating pests and weeds.",
      "Reduces the risk of plant diseases.",
      "Promotes healthy plant growth.",
    ],
    mainImageUrl: Services1Image.src,
    images: [Services2Image.src],
  },
  {
    name: "Watering & Irrigation",
    desc: "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    param: "watering-irrigation", // Zmieniono src na param i usunięto prefiks
    icon: <WateringIrrigationImage />,
    about: [
      "Watering and irrigation services ensure your garden receives the right amount of water.",
      "Proper irrigation is key to maintaining a healthy garden.",
    ],
    adventages: [
      "Ensures plants receive adequate water.",
      "Promotes healthy growth and prevents plant stress.",
      "Saves time and effort with automated irrigation systems.",
    ],
    mainImageUrl: Services3Image.src,
    images: [Services2Image.src],
  },
];
