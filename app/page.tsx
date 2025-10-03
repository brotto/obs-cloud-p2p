'use client'

import { useState } from 'react'

export default function Home() {
  const [roomId, setRoomId] = useState('')
  const [isHost, setIsHost] = useState(false)

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          OBS Cloud P2P
        </h1>

        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Streaming Colaborativo
          </h2>
          <p className="text-gray-300 mb-6">
            Conecte participantes via P2P e faça streaming para YouTube usando OBS Studio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-medium mb-3">Criar Sala</h3>
              <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
                Iniciar como Host
              </button>
            </div>

            <div className="bg-gray-700 p-4 rounded">
              <h3 className="text-xl font-medium mb-3">Entrar na Sala</h3>
              <input
                type="text"
                placeholder="ID da Sala"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full bg-gray-600 px-3 py-2 rounded mb-3 text-white"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition">
                Entrar como Participante
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Status</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Conexão P2P:</span>
              <span className="text-red-400">Desconectado</span>
            </div>
            <div className="flex justify-between">
              <span>OBS Studio:</span>
              <span className="text-red-400">Não conectado</span>
            </div>
            <div className="flex justify-between">
              <span>YouTube Stream:</span>
              <span className="text-red-400">Offline</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}