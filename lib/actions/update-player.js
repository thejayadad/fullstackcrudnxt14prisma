'use server'
import prisma from "../prisma"


export async function updatePlayer(eventData) {
    const {name, jersey, plays, sport, id} = eventData
    try {
        const updatedPlayer = await prisma.player.update({
            where: {id: id},
            data: {
                name, jersey, plays, sport
            }
        })
        return updatedPlayer
    } catch (error) {
        console.log("Error Updating Player " + error)
        throw new Error("Error: " + error.message)
    }
}