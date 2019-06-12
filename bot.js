import discord
from discord.ext    import commands
from discord.ext.commands   import Bot
import asyncio
 
bot = commands.Bot(command_prefix='$')
 
@bot.event
async def on_ready():
    print ("i am ready imao")
 
 
@bot.event
async def on_message(message):
    if(message.channel.id == "522011940566990848"):
        await bot.add_reaction(message, ":yum:")
 
 
bot.run("NTg4MjUyNTAzNzU4NDcxMTc4.XQDTsQ.5afzYf20B8PnXfv3r5OZLiBhlfM")
