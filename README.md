# rps
Rock Paper Scissors

Link to live page: https://vidorr.github.io/rps/

Links to The Odin Project pages:  
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors

Stated project learning objectives:
☑ Plan/psudo-code my first full project from scratch.
☑ Refactor code as the project expands.
☑ Manually test and troubleshoot to make sure it works.
  Revisiting
☑ Create new git branch.
☑ Merge branch into main branch and delete old branches.
☑ Use JS to manipulate the DOM
☑ Respond to interactions with event listeners.

Aditional personal objectives:
☑ Adhere to clean code practices.
☑ Extract helper functions out to keep them all doing "one thing".
☑ Recieve code review from a peer/professional and reflect of improvments.


Notes on my process:
I decided to focus mostly on the backend of this project even when implementing the GUI.
This kept me a bit more focused on the code over visual design. I can always cycle back to the frontend design later to make it look nice.
I also tried my best to avoid "looking up a solution" for anything too specific.
I knew that this project would not require anything far beyond what was already covered in previous Odin Project lessons.
This kept me honest to the goal of designing from scratch as much as possible.
Since the project came in two lessons and the first used only the console, some ineffiencies were baked into the first draft.
I also found interesting the decission on how much of the GUI to develop programatically vs in the HTML.
I decided on a hybrid approach only placing mostly empty DIVs in the HTML.
I may need to move slightly more of the structure to the HTML in the future to streamline some of the CSS.

The if/else tree in the body of the playRound() function was always a bit disappointing to me.
I knew it could be done a bit more concisely with a different approach, but it never became enough of an issue to need revision.


Code review notes and outcome:
The main notes I recived from the code review were about my getComputerChoice() function and some slight inefficiency in generating the RPS buttons.
In both cases there was just a little too much hardcoded in.
If ever adding more choices, the computer choice function would need additional branches on the existing if/else tree to accomodate.
This is solved by putting the choices into an array and generating a random index from the array.
Additionally, such an array could be used to more efficiently generate the player buttons instead of hardcoding each one.
Lastly, this array could also solve my initial distaste for the if/else tree on the playRound() function.
This also allows me to freely change or even randomize the names of the choices since they are in a single location in the code.
Since all three of these improvements rely on just one modified data structure they should not require much effort to implement and test. 

On the topic of testing: I would have liked to have done this project from a test-driven perspective, but will have to save that for future projects. 