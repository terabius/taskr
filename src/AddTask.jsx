import React from 'react';
import './AddTask.css';


export default class AddTask extends React.Component{
    
    handleClick(){
        const btn = document.querySelector('.btn-add');
        const text = document.querySelector('.task-placeholder');
        const modal = document.querySelector('.container-info-task');
        btn.classList.toggle("clicked");
        text.classList.toggle("invisible");
        modal.classList.toggle('invisible');
    }

    rateIt(e){
        //need to find a cleaner solution
        const ratingScore = e.target.classList[1].split('-')[2];
        const thermos = document.querySelectorAll('.fa-2x');

        if(ratingScore==="empty"){

            thermos[0].classList.add('red');

            thermos[1].classList.remove('red');
            thermos[2].classList.remove('red');
            thermos[3].classList.remove('red');
            thermos[4].classList.remove('red');

        } else if (ratingScore === "quarter"){

            thermos[1].classList.add('red');  
            thermos[0].classList.add('red');

            thermos[2].classList.remove('red');
            thermos[3].classList.remove('red');
            thermos[4].classList.remove('red'); 

        } else if (ratingScore === "half") {

            thermos[2].classList.add('red');
            thermos[1].classList.add('red');
            thermos[0].classList.add('red');

            thermos[3].classList.remove('red');
            thermos[4].classList.remove('red');

        } else if (ratingScore === "three") {

            thermos[3].classList.add('red');
            thermos[2].classList.add('red');
            thermos[1].classList.add('red');
            thermos[0].classList.add('red');

            thermos[4].classList.remove('red');

        } else if (ratingScore === "full") {

            thermos[4].classList.add('red');
            thermos[3].classList.add('red');
            thermos[2].classList.add('red');
            thermos[1].classList.add('red');
            thermos[0].classList.add('red');

        }

    }
    
    handleRating(){
        setTimeout(()=>{
        const thermos = document.querySelectorAll('.fa-2x');
        
        thermos.forEach(ele => {
            ele.addEventListener('click',this.rateIt);
        });
        console.log('done');
        
        },1000);
    }

    render(){
        return(
            <>


            <div className='container-add-task' >
                <div className="btn-add" onClick={this.handleClick}>+</div>
                <p className="task-placeholder">Add a new task...</p>
            </div>

            <div className="container-info-task invisible">
                <input type="text" placeholder="Add a new task..." id='task-title'/>
                <div className="group-task">

                    <div>
                        <label htmlFor="category"></label>
                        <select name="category" id="task-category">
                            <option value="work">work</option>
                            <option value="study">study</option>
                            <option value="sport">sport</option>
                            <option value="food">food</option>
                            <option value="misc">misc</option>

                        </select>
                    </div>
                    
                    <div id='rating'>
                        <i className="fa fa-thermometer-empty fa-2x" id='rating-one' aria-hidden="true"></i>
                        <i className="fa fa-thermometer-quarter fa-2x" id='rating-two'  aria-hidden="true"></i>
                        <i className="fa fa-thermometer-half fa-2x" id='rating-three'  aria-hidden="true"></i> 
                        <i className="fa fa-thermometer-three-quarters fa-2x" id='rating-four'  aria-hidden="true"></i>
                        <i className="fa fa-thermometer-full fa-2x" id='rating-five'  aria-hidden="true"></i> 
                    </div>
                    {this.handleRating()}
                    <div>
                        Duration:
                        <input type="number"/>
                    </div>
                </div>
                <textarea name="description" id="task-description" cols="30" rows="10"></textarea>
                <input type="submit" className="submit"/>
            </div>

            <p>your list is empty</p>

            </>          
        )
    }


}