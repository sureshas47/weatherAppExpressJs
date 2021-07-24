const submitBtn = document.getElementById('submitBtn');

const cityName = document.getElementById('cityName');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status');

const temp_real_value = document.getElementById('temp_real_value');

const data_hide=document.querySelector('.middle_layer');

 const getInfo = async(e) => {
    e.preventDefault();
      const cityVal=cityName.value;
         if(cityVal===""){
            city_name.innerText=`Please Enter A City Name`;
            city_name.style.color="rgb(255, 87, 51)";

          }
             else{
                    try {
                        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=84891a353d86c3c87532ed578472a017`);
                        const data = await response.json(); //convert into js object
                        const arrData=[data];
                        console.log(arrData);
                        // print value getting from api
                        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
                        temp_real_value.innerText=`${arrData[0].main.temp}`;
                       const tempMood= temp_status.innerText=arrData[0].weather[0].main;

                        
                    //    condition of show weather clear cloudy and rainy
                       if(tempMood=="Clear"){
                           temp_status.innerHTML=
                                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
                                
                       } 
                       else if(tempMood=="Clouds"){
                            temp_status.innerHTML=
                                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
                                
                       }
                       else if(tempMood=="Rain"){
                            temp_status.innerHTML=
                                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
                                
                        }
                        else{
                            temp_status.innerHTML=
                                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
                                
                        }
                        data_hide.classList.remove('data_hide');

                    } 
                    catch {
                        city_name.innerText=`Please Give A Proper City Name`;
                        city_name.style.color="rgb(255, 87, 51)";
                        data_hide.classList.add('data_hide');

                    }
                               
                }
  
}

submitBtn.addEventListener('click', getInfo);

