function smartGarbage(trash, bins){
  bins[trash] += 1;
  console.log(bins);
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

