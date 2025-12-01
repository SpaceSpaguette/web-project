rfolder=("public" "assets" "data" "api" "img")
for rsfolder in "${rfolder[@]}"; do
  mkdir $rsfolder
done
exfolder=("public/index.html" "assets/styles.css assets/themes.css" "data/about.json" "img/favicon.img")

for extendedf in "${exfolder[@]}"; do
    touch $extendedf
done