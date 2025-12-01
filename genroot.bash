rfolder=("public" "assets" "data" "api" "img" "assets/themes" "assets/js" "assets/css")
for rsfolder in "${rfolder[@]}"; do
  mkdir $rsfolder
done
exfolder=("public/index.html" "assets/css/site.css assets/themes/default.css" "data/about.json" "img/favicon.img")
for extendedf in "${exfolder[@]}"; do
    touch $extendedf
done