i = 0
basic.show_leds("""
    . . . . #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
""")

def on_forever():
    global i
    i = 0
    for index in range(10):
        basic.show_number(i)
        i += 1
basic.forever(on_forever)
