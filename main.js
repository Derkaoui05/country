// start with declaration variables
const setPara = document.getElementById('setPara');
const countryLabel = document.querySelector('.country');
const countryImage = document.getElementById('countryImage');
const phoneNumber = document.getElementById('phone-number');
const mail = document.getElementById('mail');
const address = document.getElementById('address');
const header = document.querySelector('header');
const yTick = document.querySelector('.y-tick');
const ticks = document.querySelectorAll('.x-tick');

const countryData = {
  morocco: {
    name: 'Reime Morocco',
    setup: 'Setup of Netis Group in Morocco',
    image: 'images/morocco.png',
    imageAlt: 'Map highlight for Morocco',
    phone: '+212 6744 94786',
    email: 'morocco@netisgroup.net',
    address: 'Casablanca, Morocco',
    year: 2010,
  },
  ruanda: {
    name: 'Rwanda',
    setup: 'Setup of Netis Group in Rwanda',
    image: 'images/ruanda.jpg',
    imageAlt: 'Map highlight for Rwanda',
    phone: '+250 9494 03040',
    email: 'rwanda@netisgroup.net',
    address: 'Kigali, Rwanda',
    year: 2020,
  },
  'reime-ruanda': {
    name: 'Reime Rwanda',
    setup: 'Setup of Netis Group in Rwanda',
    image: 'images/ruanda.jpg',
    imageAlt: 'Map highlight for Rwanda',
    phone: '+250 9494 03040',
    email: 'rwanda@netisgroup.net',
    address: 'Kigali, Rwanda',
    year: 2020,
  },
  nigeria: {
    name: 'Reime Nigeria',
    setup: 'Setup of Netis Group in Nigeria',
    image: 'images/nigeria.png',
    imageAlt: 'Map highlight for Nigeria',
    phone: '+234 8949 4900',
    email: 'nigeria@netisgroup.net',
    address: 'Lagos, Nigeria',
    year: 2021,
  },
  togo: {
    name: 'Reime Togo',
    setup: 'Setup of Netis Group in Togo',
    image: 'images/togo.png',
    imageAlt: 'Map highlight for Togo',
    phone: '+228 9449 3339',
    email: 'togo@netisgroup.net',
    address: 'Lomé, Togo',
    year: 2019,
  },
  ghana: {
    name: 'Ghana',
    setup: 'Setup of Netis Group in Ghana',
    image: 'images/ghana.jpg',
    imageAlt: 'Map highlight for Ghana',
    phone: '+233 7839 4786',
    email: 'ghana@netisgroup.net',
    address: 'Accra, Ghana',
    year: 2018,
  },
  ghana_2: {
    name: 'Ghana',
    setup: 'Setup of Netis Group in Ghana',
    image: 'images/ghana.jpg',
    imageAlt: 'Map highlight for Ghana',
    phone: '+233 7839 4786',
    email: 'ghana@netisgroup.net',
    address: 'Accra, Ghana',
    year: 2018,
  },
  'reime-ghana': {
    name: 'Reime Ghana',
    setup: 'Setup of Netis Group in Reime Ghana',
    image: 'images/ghana.jpg',
    imageAlt: 'Map highlight for Ghana',
    phone: '+233 7817 4786',
    email: 'reime_ghana@netisgroup.net',
    address: 'Accra, Ghana',
    year: 2017,
  },
  drc: {
    name: 'Reime DRC',
    setup: 'Setup of Netis Group in DRC',
    image: 'images/drc.jpg',
    imageAlt: 'Map highlight for the DRC',
    phone: '+243 0797 37494',
    email: 'drc@netisgroup.net',
    address: 'Kinshasa, DRC',
    year: 2016,
  },
  ivorycoast: {
    name: "Reime Côte d'Ivoire",
    setup: "Setup of Netis Group in Côte d'Ivoire",
    image: "images/d'ivoire.jpg",
    imageAlt: "Map highlight for Côte d'Ivoire",
    phone: '+212 5222 29582',
    email: 'info.group@netisgroup.net',
    address:
      'The Ivory Coast Business Center Building, 4th floor, No.2 Mandarona lot, Sidi Maarouf, Zenith Center, Casablanca 20270, Morocco',
    year: 2013,
  },
  burkina: {
    name: 'Reime Burkina Faso',
    setup: 'Setup of Netis Group in Burkina Faso',
    image: 'images/burkina.jpg',
    imageAlt: 'Map highlight for Burkina Faso',
    phone: '+226 9734 94786',
    email: 'burkina@netisgroup.net',
    address: 'Ouagadougou, Burkina Faso',
    year: 2011,
  },
  niger: {
    name: 'Reime Niger',
    setup: 'Setup of Netis Group in Niger',
    image: 'images/niger.jpg',
    imageAlt: 'Map highlight for Niger',
    phone: '+227 9844 94786',
    email: 'niger@netisgroup.net',
    address: 'Niamey, Niger',
    year: 2010,
  },
  gabon: {
    name: 'Reime Gabon',
    setup: 'Setup of Netis Group in Gabon',
    image: 'images/gabon.jpg',
    imageAlt: 'Map highlight for Gabon',
    phone: '+241 6744 94786',
    email: 'gabon@netisgroup.net',
    address: 'Libreville, Gabon',
    year: 2009,
  },
  ethiopia: {
    name: 'Reime Ethiopia',
    setup: 'Setup of Netis Group in Ethiopia',
    image: 'images/ethiopia.jpg',
    imageAlt: 'Map highlight for Ethiopia',
    phone: '+251 6394 786',
    email: 'ethiopia@netisgroup.net',
    address: 'Addis Ababa, Ethiopia',
    year: 2010,
  },
  kenya: {
    name: 'Reime Kenya',
    setup: 'Setup of Netis Group in Kenya',
    image: 'images/kenya.jpg',
    imageAlt: 'Map highlight for Kenya',
    phone: '+254 9994 786',
    email: 'kenya@netisgroup.net',
    address: 'Nairobi, Kenya',
    year: 2017,
  },
  uganda: {
    name: 'Reime Uganda',
    setup: 'Setup of Netis Group in Uganda',
    image: 'images/uganda.jpg',
    imageAlt: 'Map highlight for Uganda',
    phone: '+256 6744 98838',
    email: 'uganda@netisgroup.net',
    address: 'Kampala, Uganda',
    year: 2013,
  },
  tanzania: {
    name: 'Reime Tanzania',
    setup: 'Setup of Netis Group in Tanzania',
    image: 'images/tanzania.jpg',
    imageAlt: 'Map highlight for Tanzania',
    phone: '+255 7783 338',
    email: 'tanzania@netisgroup.net',
    address: 'Dodoma, Tanzania',
    year: 2018,
  },
};

const highlightTick = (year) => {
  ticks.forEach((tick) => {
    tick.classList.toggle('active-tick', tick.dataset.year === String(year));
  });
};

const updateCountry = (countryId) => {
  const data = countryData[countryId];
  if (!data) {
    return;
  }

  setPara.textContent = data.setup;
  countryLabel.textContent = data.name;
  countryImage.src = data.image;
  countryImage.alt = data.imageAlt;
  phoneNumber.textContent = data.phone;
  mail.textContent = data.email;
  address.textContent = data.address;
  header.textContent = data.year;
  yTick.textContent = data.year;
  highlightTick(data.year);
};

const setSelectedPath = (targetPath) => {
  const previous = document.querySelector('.path.selected');
  if (previous && previous !== targetPath) {
    previous.classList.remove('selected');
  }
  targetPath.classList.add('selected');
};

const attachCountryListener = (group) => {
  const path = group.querySelector('.path');
  if (!path) {
    return;
  }

  const countryId = group.id;
  const label = countryData[countryId]?.name || group.id;

  path.setAttribute('role', 'button');
  path.setAttribute('tabindex', '0');
  path.setAttribute('aria-label', `Select ${label}`);

  const handleSelect = () => {
    updateCountry(countryId);
    setSelectedPath(path);
  };

  path.addEventListener('click', handleSelect);
  path.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect();
    }
  });
};

const countryGroups = document.querySelectorAll('.county');
countryGroups.forEach(attachCountryListener);

// initialize with the default selected country
updateCountry('ivorycoast');
highlightTick(countryData.ivorycoast.year);
