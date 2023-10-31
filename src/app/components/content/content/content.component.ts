import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input() htmlContent: string | undefined;
  @Input() componentContent: any;

  private route = inject(ActivatedRoute);
  private pageContent = inject(PageService);
  private cdRef = inject(ChangeDetectorRef);
  private contentSubscription: Subscription | undefined;
  public loading = false;

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;
    if (routeData && routeData['componentContent']) {
      this.componentContent = routeData['componentContent'];
    } else {
      const contentId = routeData['htmlContent'];
      this.loading = true;
      console.log('loading');

      this.contentSubscription = this.pageContent
        .getPageContent(contentId)
        .subscribe({
          next: (data) => {
            if (data !== undefined) {
              this.htmlContent = data.conteudo;
            }
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('complete');
            this.loading = false;
            this.cdRef.detectChanges();
          },
        });
    }
  }

  ngOnDestroy(): void {
    if (this.contentSubscription) {
      this.contentSubscription.unsubscribe();
    }
  }
}
