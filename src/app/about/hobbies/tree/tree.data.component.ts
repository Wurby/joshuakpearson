export interface GearNode {
  name: string;
  children?: GearNode[];
}

export const GEAR_DATA: GearNode[] = [
  {
    name: 'Shelter',
    children: [
      {
        name: 'HammockGear Economy Underquilt, 20deg, Standard Stuff',
      },
      {
        name: 'HammockGear Economy Overquilt, 20deg, 2oz Overstuffed',
      },
      {
        name: 'MallowMe Doublewide Hammock',
      },
      {
        name: 'MallowMe Hammock Straps',
      },
      {
        name: 'Everest Active Gear RainFly',
      },
    ],
  },
  {
    name: 'Water Filtration System',
    children: [
      {
        name: 'Sawyer Mini',
      },
      {
        name: 'Cnoc Outdoors Vecto 2L water bladder -- x2',
      },
      {
        name: '440 Paracord -- to hang the gravity fed system',
      },
    ],
  },
  {
    name: 'Food Gear',
    children: [
      {
        name: 'Tinder Kit',
        children: [
          {
            name: 'Pocket Knife',
          },
          {
            name: 'Ferro Rod',
          },
          {
            name: 'Dryer Lint -- kept in water tight container',
          },
        ],
      },
      {
        name: 'Mess Kit',
        children: [
          {
            name: 'Small Bunsen Burner and Stove',
          },
          {
            name: 'Small 700ml titanium Pot with Lid',
          },
          {
            name:
              'Stainless Steel Utensil Kit -- 9 inch Chopsticks, Fork, Spoon',
          },
          {
            name: 'Small Collapsable Stainless Steel Grill',
          },
        ],
      },
    ],
  },
  {
    name: 'Camera Gear',
    children: [
      {
        name: 'Canon 6d Mark II -- 2 Batteries',
      },
      {
        name: 'Lens: Canon 50mm f1.8',
      },
      {
        name: 'Lens: Samyang 14mm f2.8',
      },
      {
        name:
          'Garbage amazon basics aluminum tripod in desperate need of replacement',
      },
    ],
  },
];
