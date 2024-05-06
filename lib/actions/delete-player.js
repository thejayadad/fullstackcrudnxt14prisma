'use server'
import prisma from "../prisma"

export async function deletePlayer(eventData) {
    const { id} = eventData;
    try {
        const deletedPlayer = await prisma.player.delete({
            where: {id:id}
        })
        return deletedPlayer
    } catch (error) {
        console.log("Error deleting player " + error)
        throw new Error("Error " + error.message)
    }
}