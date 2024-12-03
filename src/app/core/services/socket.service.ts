import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { ToastService } from './toast.service';
@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;

  constructor(private _toastService: ToastService) {}
  connect(authToken: string): void {
    this.socket = io('https://api.lms-staging.com/course', {
      path: '/api/main/socket', // Handshake path
      transports: ['websocket'], // Use WebSocket transport
      auth: {
        authorization: authToken, // Pass JWT token
      },
    });
    this.socket.on('connect', () => {
      console.log('Socket connected:', this.socket.id);
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error.message);
    });
  }
  sendPlayedDuration(
    watchDuration: number,
    courseId: string,
    lectureId: string
  ): void {
    const eventName = 'update-lecture-watch-duration';
    const eventData = {
      courseId,
      lectureId,
      watchDuration,
    };

    this.socket.emit(eventName, eventData, (error: any, response: any) => {
      if (error) {
        console.error(`Error in ${eventName}:`, error);
        this._toastService.show('Failed to update watch duration', {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      } else {
        console.log(`${eventName} successful:`, response);
        // Response handling logic (response is null, but you can log or notify the success)
      }
    });
  }
  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      console.log('Socket disconnected');
    }
  }
}
