*A note on all projects: I merged a few Github old accounts into this new "clean" one since the GA course required an annoying mix of Github Enterprise and personal Github accounts. It was confusing and full of other in-class exercise mess. It's why you won't see commits from this account dating prior to February, but if you dig into the projects you can see the work I committed using my other GitHub accounts (cbeattie and cbeattie2).
All projects here were done in about 5 days so are very much MVPs at this stage, but I will continue to work on them when I get the time.*

# Singapore Car Parking Map
[Link to site](https://singapore-car-parking-map.vercel.app/ "Link to site") 

A map that shows car park location and availability in Singapore.

## Description

Google Maps is the most popular map tool, but the information on car parking in Singapore is minimal. The Singapore Government has put good information online through their API and some websites have implemented this, but the user experience is poor. E.g. [SG Car Mart](https://www.sgcarmart.com/news/carpark_index.php "SG Car Mart"), the map doesn’t fit the window, searching for a location in their search bar doesn’t automatically zoom in on the results.

This is an attempt to use Google Maps API to create a map with the same popular UX, but overlay it with more useful carparking data from the Singapore Government.
It allows the user to input an address and show car parks within the radius at that location, as well as how many carparks are available at each.

### Technologies Used
- React
- Axios for API
- Google Map React
- Geolib
- React Bootstrap
- Vercel for deployment
- JavaScript, JSX, HTML, CSS

### Screenshot
![Screenshot](/documentation/CarParkingMap.png)

### Wireframes

This is is how I originally imagined it. My final version has more information available on the carparks themselves but doesn't (yet) allow the user to select their radius.
![Wireframe](/documentation/Wireframe.png)

### User Stories

As a user:
- I want to be able to search for car parking information and have the results displayed on a map.
- I want to see the most relevant results shown on the map based on an address I supply and zoomed in to see the detail.
- I want to be able to view a large map that takes up the entire screen.
- I want to be able to click on each carpark location icon to view more information about that carpark.


---

## Planning and Development Process

The allotted time was 4 days. An extra day was spent in pre-production to resesearch APIs and component libraries, create a wireframe and write a planning document.

### Problem-Solving Strategy

This was my first self-led project in React using 3rd party components. The documentation of those components was poor so a lot of trial-and-error and googling had to be done.

### Unsolved problems and wish list

- A bug where occasionally some markers stick to the viewport when the map is dragged.
- Searchbox allows you to search and return a map anywhere in the world, not just Singapore, which is incorrect.
- Searching for a location and hitting enter instead of selecting a result will not always have the expected effect.
- Markers need to be prettier.
- Markers should update when map is dragged to fill the new bounds.
- I want to eventually have markers showing over the whole of Singapore.
- Availability data should be taken from LTA DataMall instead of Data.gov.sg. The latter only has availability information for HDB carparks, the former has availability for URA & LTA carparks too. There were some issues with LTA DataMall data retrieval however in this frontend-only format, so this should be updated in future.
- There are other small carparking datasets which would be nice to add, e.g. NParks and URA Season Parking.
- Allowing the user to select the radius that they want to search around would be ideal.
- Generally anything that doesn't behave like Google Maps is highly annoying as that UX is so ingrained in me!

## APIs Used

- Carpark location: [LTA DataMall](https://www.mytransport.sg/content/mytransport/home/dataMall/dynamic-data.html#Traffic "LTA DataMall")
- Carpark availability: [Data.gov.sg](https://data.gov.sg/dataset/carpark-availability "Data.gov.sg")

---

## Acknowledgments
- Simon Lau and Nausheen Salauddin
- GA SEI-26 teammates
- Will Beattie
