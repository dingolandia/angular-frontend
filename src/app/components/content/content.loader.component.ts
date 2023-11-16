import { ChangeDetectorRef, Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageService } from 'src/app/services/page.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-content-loader',
  template: `<div [innerHTML]="sanitizedHtml"></div>`,
})
export class ContentsLoaderComponent {
  @Input() htmlContent: string | undefined;

  private route = inject(ActivatedRoute);
  private pageContent = inject(PageService);
  private cdRef = inject(ChangeDetectorRef);
  private loadingService = inject(LoadingService);
  private contentSubscription: Subscription | undefined;
  public sanitizedHtml: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;

    if (routeData && routeData['htmlContent']) {
      const contentId = routeData['htmlContent'];
      this.loadingService.setLoading(true);

      this.contentSubscription = this.pageContent
        .getPageContent(contentId)
        .subscribe({
          next: (data) => {
            if (data !== undefined) {
              this.sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(
                data.conteudo
              );
            }
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.loadingService.setLoading(false);
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
