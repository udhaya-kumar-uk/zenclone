import React from "react";
import {  Outlet } from "react-router-dom";
import './style/styles.css'


export default function Session(){
    return(
        <>
           <div className="class">
           <div>class</div>
           <p>User profile <i class="fa-solid fa-user"></i></p>
           </div>
           <div className="container">
              <div className="content">
                <div className="join-class">
                    Join the class on time!
                </div>
                <div>
                <div className="title">
                <div className="topic">
                 <p> Javascript - Day -1 : Introduction to Browser & web</p>
                09/01/2023 - Monday - 10:00 AM : 12:30 PM
                </div>
                <div>
                <div className="cont">Contents:</div>
                <div className="text">
                <p> Introduction to web Browser Wars DOM tree CSSOM tree,</p>
                  <p> Browser internals - HTML parser,</p> 
                  <p> CSS parser,  JavaScript V8 engine,</p> 
                  <p>  internals IP – MAC address – Ports & Evolution of HTTP,</p>
                  <p> HTTP Methods</p>
                  <p>  How the Server looks at the URL</p>
                  <p> Request & Response cycle</p>
                </div>
                <div className="pre"> Pre-read:</div>
                  <p className="nopre"> No preread available</p>
                </div>
                </div>
               
                </div>
                <div className="activity">
                     Activites
                </div>
                <div className="activity-link">
                        <a href="#">https://docs.google.com/document/d/1QznT1zM4mI6dG0TODx5Xjs1GquMoSHO3xZ1USDnVM-w/preview</a>
                </div>
           </div>
              <div className="roadmap">
                <div className="session">Session Roadmap</div>
                   <div className="circle-container">
                   <div className="circle"><a href="#">1</a></div>
                   <div className="circle"><a href="#">2</a></div>
                   <div className="circle"><a href="#">3</a></div>
                   <div className="circle"><a href="#">4</a></div>
                   <div className="circle"><a href="#">5</a></div>
                   <div className="circle"><a href="#">10</a></div>
                   <div className="circle"><a href="#">9</a></div>
                   <div className="circle"><a href="#">8</a></div>
                   <div className="circle"><a href="#">7</a></div>
                   <div className="circle"><a href="#">6</a></div>
                   <div className="circle"><a href="#">11</a></div>
                   <div className="circle"><a href="#">12</a></div>
                   <div className="circle"><a href="#">13</a></div>
                   <div className="circle"><a href="#">14</a></div>
                   <div className="circle"><a href="#">15</a></div>
                   <div className="circle"><a href="#">20</a></div>
                   <div className="circle"><a href="#">19</a></div>
                   <div className="circle"><a href="#">18</a></div>
                   <div className="circle"><a href="#">17</a></div>
                   <div className="circle"><a href="#">16</a></div>
                   <div className="circle"><a href="#">21</a></div>
                   <div className="circle"><a href="#">22</a></div>
                   <div className="circle"><a href="#">23</a></div>
                   <div className="circle"><a href="#">24</a></div>
                   <div className="circle"><a href="#">25</a></div>
                   <div className="circle"><a href="#">30</a></div>
                   <div className="circle"><a href="#">29</a></div>
                   <div className="circle"><a href="#">28</a></div>
                   <div className="circle"><a href="#">27</a></div>
                   <div className="circle"><a href="#">26</a></div>
                   <div className="circle"><a href="#">31</a></div>
                   <div className="circle"><a href="#">32</a></div>
                   <div className="circle"><a href="#">33</a></div>
                   <div className="circle"><a href="#">34</a></div>
                   <div className="circle"><a href="#">35</a></div>
                   <div className="circle"><a href="#">40</a></div>
                   <div className="circle"><a href="#">39</a></div>
                   <div className="circle"><a href="#">38</a></div>
                   <div className="circle"><a href="#">37</a></div>
                   <div className="circle"><a href="#">36</a></div>
                   <div className="circle"><a href="#">41</a></div>
                   <div className="circle"><a href="#">42</a></div>
                   <div className="circle"><a href="#">43</a></div>
                   <div className="circle"><a href="#">44</a></div>
                   

               </div>
                    <div>
                        <div className="adittional">
                           <p>Adittional Session</p>
                           <h3>No Adittional Session</h3>
                        </div>
                        
                    </div>
              

              </div>
              
           </div>
            <Outlet/>
       
        </>
              
     
    )
}