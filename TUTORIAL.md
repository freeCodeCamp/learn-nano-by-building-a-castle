# Learn Nano by Building a Castle

> Welcome to the Nano lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello nano` into the terminal and press enter.

#### HINTS

- Capitalization matters
- Make sure you are in the `project` folder when you enter the command
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. Touch `castle.sh`

### 20.1

Use `touch` to create a file named `castle.sh` in the `project` folder.

#### HINTS

- Use the touch command to create the file
- Make sure you are in the `project` folder when you enter the command
- Try entering `touch castle.sh` in the terminal
- Enter `cd ~/project` to get to the project folder if you aren't there

## 25. List contents

### 25.1

Use the list (`ls`) command to make sure your file is there.

#### HINTS

- Type `ls` into the terminal and press enter
- Make sure you are in the `project` folder when you enter the command
- Enter `cd ~/project` to get to the project folder if you aren't there

## 30. Nano `castle.sh`

### 30.1

There it is. Nano is a program for editing files that runs in the terminal. You can open a file with `nano filename`. Open the `castle.sh` file you created with Nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- You can exit nano by pressing `control + x` if you opened the wrong file

## 40. Write out `castle.sh`

### 40.1

The terminal is showing your file in Nano. At the bottom are the commands you can use. Your file is empty right now. Add `echo hello nano` at the top and press `control + o` to "write-out", or save, the file. You will be prompted at the bottom for a filename. Leave it as `castle.sh` and press enter to save the file.

#### HINTS

- Put `echo hello nano` at the top of the file, then press `control + o`, then `enter` to save the file
- Make sure the file was saved as `castle.sh`
- If you are trying to reset, exit nano first

## 50. Exit

### 50.1

Exit Nano by pressing `control + x`.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 60. Run `castle.sh`

### 60.1

This will be a small bash script. You can run it with `bash filename`. Run your `castle.sh` file in the terminal.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 70. Nano `castle.sh`

### 70.1

You can see the command in your file ran and output text into the terminal. Open your file again with nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 80. Delete `echo hello nano`

### 80.1

You can "cut" text with `control + k`. Move the cursor to the line with your text and remove the whole line. When you are done, save the file with `control + o`. Note that you cannot use a mouse to move your cursor.

#### HINTS

- Remove the `echo hello nano` line of text and save the file
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 90. Add `echo ""`

### 90.1

You are going to draw a castle that you can print to the terminal. Add `echo ""` to your file. Put an empty line in between the two quotes like this:

```
echo "

"
```

When you are done, save the file with `control + o`.

#### HINTS

- Your file should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 100. Add the bottom row to castle

### 100.1

You will draw the castle between the quotes. Add ground level by putting 20 underscores (`_`) in the row between the quotes. It should look like this:

```
echo "
____________________
"
```

Save the file with `control + o` when you are done.

#### HINTS

- Your file should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first

## 110. Exit

### 110.1

The `^` in front of all the commands at the bottom means to press `control` and the letter to run the command. Exit Nano with the `Exit` command.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 120. Run `castle.sh`

### 120.1

Use the `bash` command to run your `castle.sh` file in the terminal again.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 130. Nano `castle.sh`

### 130.1

Looks like it's working. Open your file with Nano.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 140. Add the bottom row sides

### 140.1

Add a vertical bar, or pipe (`|`), at each end of your ground level. It should look like this:

```
|____________________|
```

Save the file when you are done.

#### HINTS

- Don't change the other rows
- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:
```sh
echo "
|____________________|
"
```

## 150. Add second row

### 150.1

Add another story to your castle above the ground level that has two more vertical bars. Each bar should be above your existing bars so you need spaces in between them. It should look like this:

```
|                    |
|____________________|
```

When you are done, save the file. 

#### HINTS

- Don't change the other rows
- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:
```sh
echo "
|                    |
|____________________|
"
```

## 160. Exit

### 160.1

Exit Nano so you can run the script again.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 170. Run `castle.sh`

### 170.1

Run your file again to see the progress.

#### HINTS

- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 180. Nano `castle.sh`

### 180.1

Open your file again so you can add some more.

#### HINTS

- Use Nano to open the file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 190. Add the sides of the castle

### 190.1

You can use `control + k` to "cut" and `control + u` to "uncut", or paste, a line. Add five more rows like the one you just added to make your castle six stories high. Try to use the cut and paste method. It should look like this:

```
|                    |
|                    |
|                    |
|                    |
|                    |
|____________________|
```

When you are done, save the file.

#### HINTS

- Your castle should match the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole file should look like this:
```sh
echo "
|                    |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 200. Add a roof to the castle

### 200.1

The existing top row is going to be the roof of the castle. Make it look like this:

```
|  |______________|  |
```

There's two spaces between the first and second bars, followed by 14 underscores (`_`), then a repeat of the bars and spaces. When you are done, save the file.

#### HINTS

- Make sure your castle is still six stories high
- Your top row should match the example
- You should not change any other rows
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:
```sh
echo "
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 210. Exit

### 210.1

The `M` at the beginning of the other commands at the bottom stands for "meta". It's a key that doesn't exist on most keyboards. If you're on OSX it means press `escape` then then the letter. If you are on another system, press `ALT` then the letter. Use the exit command to get back to the terminal.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 220. Run `castle.sh`

### 220.1

Run the script to make sure things are coming along as expected.

#### HINTS

- Use the `bash` command to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 230. Nano `castle.sh`

### 230.1

That construction team must be working hard :smile: Open the file again to continue building.

#### HINTS

- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 240. Add the second from top row

### 240.1

The top of the castle has a lookout tower on each end. Add a single row at the top of your castle to make the top look like this:

```
/  \              /  \
|  |______________|  |
```

The slashes are directly above the vertical bars. When you are done, save the file.

#### HINTS

- The top of the castle should match the top row of the example
- The castle should now be seven stories high
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:
```sh
echo "
/  \              /  \
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 250. Add the peaks

### 250.1

Add the peaks of your lookout towers. Put another row at the top with `/\` above each lookout. It should look like this:

```
 /\                /\
/  \              /  \
```

When you are done, save the file.

#### HINTS

- Your top row should match the top row of the example
- The castle should now be nine stories high
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this:
```sh
echo "
 /\                /\
/  \              /  \
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 260. Exit

### 260.1

Go back to the terminal with the exit command.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 270. Run `castle.sh`

### 270.1

Run your script to bask in the glory of your work.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 280. Nano `castle.sh`

### 280.1

Oh no!! :open_mouth: Looks like a storm came through and blew the roof off! I think we can fix it. Open up the file.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 290. Fix the roof

### 290.1

I'm not quite sure what happened here... Some of the `\` don't seem to be working. Try adding a space after the two `\` on the top right lookout tower. Put them where these `x`'s are:

```
 /\                /\x
/  \              /  \x
```

Maybe that will patch the roof. When you are done, save the file.

#### HINTS

- Put a space in place each `x` in the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`'s:
```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|                    |
|                    |
|                    |
|____________________|
"
```

## 300. Exit

### 300.1

Go back to the terminal so you can run the script again.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 310. Run `castle.sh`

### 310.1

Run the script to see if the roof is fixed.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 320. Nano `castle.sh`

### 320.1

Okay, it's all patched up. Open the file again.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 330. Add windows

### 330.1

Add some windows to your castle. Use a left and right brackets for them (`[]`). Put three pairs on the fourth story, like this:

```
|   []    []    []   |
```

There's four spaces between each window and three between the window and the sides. Save the file when you are done.

#### HINTS

- Add three windows to the fourth row from the bottom exactly like the example
- There's three spaces between a `|` and window
- There's four spaces between a window and another window
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:
```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|                    |
|____________________|
"
```

## 340. Add the door

### 340.1

Last is the door. Change the bottom two rows so there's a door right in the middle that looks like this:

```
|         __         |
|________|  |________|
```

The bottom row has two vertical bars with two spaces between them and the second story has two underscores to make the top of the door. When you are done, save the file.

#### HINTS

- Make sure your bottom two rows look like the example
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:
```sh
echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|         __         |
|________|  |________|
"
```

## 350. Exit

### 350.1

Nano has a lot more features, but the basics will get you through most scenarios. Go back to the terminal with the command to exit nano.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 360. Run `castle.sh`

### 360.1

Run your script again. Hopefully the weather has been good.

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 370. Nano `castle.sh`

### 370.1

Excellent. Open the file, I think there's one more thing you can add.

#### HINTS

- Use the `nano` command to open your file
- Type `nano castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first

## 380. Add a welcome

### 380.1

At the very top of the file, add another `echo` command with two quotes and an empty line between the quotes. In the empty line put the message, "Welcome to my castle". Here's an example:

```
echo "
message here
"
```

When you are done, save the file.

#### HINTS

- Add the code above but replace `message here` with the correct message
- The correct message is `Welcome to my castle`
- Put all this at the very top of the file
- Use `control + o` to save the file
- Press `enter` after `control + o` to save the file without changing the name
- If you are trying to reset, exit nano first
- The whole castle should look like this, but with spaces instead of `x`:
```sh
echo "
Welcome to my castle
"

echo "
 /\                /\x
/  \              /  \x
|  |______________|  |
|                    |
|   []    []    []   |
|                    |
|         __         |
|________|  |________|
"
```

## 390. Exit

### 390.1

Go back to the terminal with the exit command so you can see if it's all done.

#### HINTS

- Use `control + x` to exit nano
- Make sure you are in the `castle.sh` file before you exit
- Open the file with `nano castle.sh` if you need to open it first
- If you are trying to reset, exit nano first

## 400. Run `castle.sh`

### 400.1

This is the last step. Run the script to see your final product :smile:

#### HINTS

- Use `bash` to run the script
- Type `bash castle.sh` in the terminal
- Make sure you are in the `project` folder when you enter the command
- If you are trying to reset, exit nano first
