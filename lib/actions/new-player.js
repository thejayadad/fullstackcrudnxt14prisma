'use server'
import prisma from "../prisma"


export async function createPlayer(eventData) {
    try {
        const {name, jersey, plays, sport} = eventData;
        const newPlayer = await prisma.player.create({
            data: {
                name, jersey, plays, sport
            }
        })
        return newPlayer
    } catch (error) {
        console.log("New Player Error " + error)
        throw new Error("Failed to create player")
    }
}