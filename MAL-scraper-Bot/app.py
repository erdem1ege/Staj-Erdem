from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import pandas as pdp
my_url=https://www.imdb.com/search/title/?explore=genres&title_type=feature
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()
page_soup = soup(page_html, "html.parser")
page_soup
filename= "imdb_m.csv"
f= open(filename, "w")

headers= "Name, Year, Runtime \n"
f.write(headers)

for container in containers:
    name= container.img["alt"]
    year_mov= container.findAll("span", {"class": "lister-item-year"})
    year=year_mov[0].text
    runtime_mov= container.findAll("span", {"class": "runtime"})
    runtime=runtime_mov[0].text
    
    print(name + "," + year + "," + runtime +  "\n")
    f.write(name + "," + year + "," + runtime  + "\n")
    
f.close()
import pandas as pd
imdb = pd.read_csv("imdb_m.csv", encoding="latin1")
imdb.head()